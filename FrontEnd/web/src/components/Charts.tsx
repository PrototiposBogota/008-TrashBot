import * as React from 'react'

import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Charts extends React.Component {
    public chartMaterials: am4charts.PieChart3D;
    public chartDefinitions: am4charts.PieChart3D;

    public componentDidMount() {

        // tslint:disable:object-literal-sort-keys


        const dataMaterials = [
            {
                "id": 2,
                "name": "reciclar_vidrio",
                "counter": 20,
                "description": "reciclar_vidrio",
                "created_at": "2018-08-29T03:36:17.505Z",
                "updated_at": "2018-09-28T23:53:32.790Z"
            },
            {
                "id": 3,
                "name": "reciclar_plastico",
                "counter": 2,
                "description": "reciclar_plastico",
                "created_at": "2018-08-29T04:09:10.317Z",
                "updated_at": "2018-09-15T16:08:32.789Z"
            },
            {
                "id": 5,
                "name": "reciclar_papel",
                "counter": 3,
                "description": "reciclar_papel",
                "created_at": "2018-08-29T15:44:31.190Z",
                "updated_at": "2018-09-28T23:54:20.449Z"
            },
        ];


        const dataDefinitios = [
            {
                "id": 6,
                "name": "definicion_Reciclaje",
                "counter": 1,
                "description": "definicion_Reciclaje",
                "created_at": "2018-09-11T02:50:35.657Z",
                "updated_at": "2018-09-11T02:50:35.657Z"
            },
            {
                "id": 4,
                "name": "definicion_Compostaje",
                "counter": 4,
                "description": "definicion_Compostaje",
                "created_at": "2018-08-29T15:42:36.271Z",
                "updated_at": "2018-09-28T00:34:27.869Z"
            }
        ];

        this.chartMaterials = this.generateChart("chartMaterials",dataMaterials);
        this.chartDefinitions = this.generateChart("chartDefinitions",dataDefinitios);        
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
                <h4>¿Qué reciclan/desechan los usuarios de Trashbot?</h4>
                <div id="chartMaterials" style={{ width: "100%", height: "500px" }}></div>

                <h4>¿Cúales son las definiciones más buscadas en Trashbot?</h4>
                <div id="chartDefinitions" style={{ width: "100%", height: "500px" }}></div>
            </div>
        );
    }

    private generateChart(nameElement, data){
        const chart = am4core.create(nameElement, am4charts.PieChart3D);

        chart.padding(20,20,20,20);

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

        chart.legend = new am4charts.Legend();
        chart.innerRadius = am4core.percent(40);

        chart.responsive.enabled = true;

        return chart;
    }
}

export default Charts;