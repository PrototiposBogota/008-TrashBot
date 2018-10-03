import * as React from 'react'

import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { API } from '../service/backend';

am4core.useTheme(am4themes_animated);

class Charts extends React.Component {
    public chartMaterials: am4charts.PieChart3D;
    public chartDefinitions: am4charts.PieChart3D;

    public componentDidMount() {

        API.dataChart('/stats/reciclar').then(data => {
            this.chartMaterials = this.generateChart("chartMaterials", data);
        });

        API.dataChart('/stats/definiciones').then(data => {
            this.chartDefinitions = this.generateChart("chartDefinitions", data);
        });
    }

    public componentWillUnmount() {
        if (this.chartMaterials) {
            this.chartMaterials.dispose();
        }

        if (this.chartDefinitions) {
            this.chartDefinitions.dispose();
        }
    }

    public render() {
        return (
            // tslint:disable:jsx-self-close
            <div>
                <section>
                    <h4>¿Qué reciclan/desechan los usuarios de Trashbot?</h4>
                    <div id="chartMaterials" style={{ width: "100%", height: "500px" }}></div>
                </section>

                <section>
                    <h2>¿Cúales son las definiciones más buscadas en Trashbot?</h2>
                    <div id="chartDefinitions" style={{ width: "100%", height: "500px" }}></div>
                </section>

            </div>
        );
    }

    private generateChart(nameElement, data) {
        const chart = am4core.create(nameElement, am4charts.PieChart3D);

        chart.padding(20, 20, 20, 20);

        const series = chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "counter";
        series.dataFields.category = "description";
        series.dataFields.depthValue = "counter";

        series.colors.step = 2;
        series.slices.template.cornerRadius = 5;

        chart.data = data;
        chart.depth = 50;

        chart.startAngle = 180;
        chart.endAngle = 360;

        series.labels.template.disabled = true;
        series.ticks.template.disabled = true;

        chart.legend = new am4charts.Legend();
        chart.legend.position = "right";
        chart.innerRadius = am4core.percent(40);

        chart.responsive.enabled = true;

        return chart;
    }
}

export default Charts;