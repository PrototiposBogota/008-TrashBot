module Api
    module V1
        class ChatsController < ApplicationController
            def index
                
            end
            
            require 'uri'
            require 'net/http'
            def create
                @mensaje = mensaje_params

                t1 = Time.now
                url = URI("https://trashbot-node.herokuapp.com/api/message")

                http = Net::HTTP.new(url.host, url.port)
                http.use_ssl = true

                request = Net::HTTP::Post.new(url)
                request["Content-Type"] = 'application/json'
                request.body = @mensaje.to_json

                response = http.request(request)
                #puts response.read_body
                obj = JSON.parse(response.read_body)
                estadisticas = get_estadisticas(obj)

                t2 = Time.now

                # puts "\n"

                puts estadisticas

                # puts response

                puts "Tiempo (sec): " + String(t2 - t1)

                

                render json: obj["output"]["text"], status: :created
            end

            private
                def mensaje_params
                    params.require(:mensaje).permit(input: [:text], 
                        context: [:conversation_id, :no_reservation, 
                            system: [:dialog_turn_counter, :dialog_request_counter, :branch_exited, :branch_exited_reason, 
                                dialog_stack: [:dialog_node] ] ])
                end

                def get_estadisticas(response)

                    estadisticas = {}
    
                    # response = {"intents"=>[{"intent"=>"Reciclar", "confidence"=>0.9567671298980713}], "entities"=>[{"entity"=>"material", "location"=>[16, 22], "value"=>"vidrio", "confidence"=>1}, {"entity"=>"material", "location"=>[25, 33], "value"=>"plastico", "confidence"=>1}], "input"=>{"text"=>"Quiero reciclar vidrio y plastico"}, "output"=>{"text"=>["Para reciclar el vidrio se debe retirar cualquier otro material, por ejemplo, en los envases de vidrio debemos retirar la tapa
                    #     ya que esta deberá reciclarse por norma general en el contenedor azul. Y el vidrio se debe depositar en las papeleras de color blanco.", "p_blanca.jpg", "Hay que tener precaución con el reciclaje del vidrio, utiliza guantes. Si consideras necesario, puedes colocar el vidrio en una caja de cartón y con un marcador escribir en ella \"Vidrio\". Esto facilitará la posterior clasificación de basura.", "Si estás en tu casa o apartamento usa una bolsa blanca."], "nodes_visited"=>["node_16_1529704717254", "node_5_1529881720640"], "log_messages"=>[]}, "context"=>{"conversation_id"=>"2b2f1c4e-8b40-4033-82cd-61b51588641e", "no_reservation"=>true, "system"=>{"dialog_turn_counter"=>3, "dialog_request_counter"=>3, "dialog_stack"=>[{"dialog_node"=>"root"}], "_node_output_map"=>{"node_16_1529704717254"=>[0], "node_5_1529881720640"=>{"0"=>[0, 0], "1"=>[0, 0], "2"=>[0, 0, 1]}}, "branch_exited"=>true, "branch_exited_reason"=>"completed"}}}
                    for intent in response["intents"] do
                        if intent["intent"].downcase == "reciclar".downcase && intent["confidence"] > 0.85
                            estadisticas["solo_reciclar"] = estadisticas.key?("solo_reciclar") ? (estadisticas["solo_reciclar"]+1) : 1
                        end
                    end
                    estadisticas = estadisticas.merge(entities_from_response(response))
                    return estadisticas
                end

                def entities_from_response(response)
                    entities = response["entities"]
                    texts = response["output"]["text"]
                    intents = response["intents"]
                    
                    entities_stats = {}
                    #puts (texts.select{ |t| t[/^p_.*jpg$/] }).length
                    for entity in entities do
                        if (entity["entity"].downcase == "material".downcase || entity["entity"].downcase == "desechos".downcase) && entity["confidence"] > 0.85 &&  (texts.select{ |t| t[/^p_.*jpg$/] }).length > 0
                            entities_stats["reciclar_#{entity["value"]}"] = entities_stats.key?("reciclar_#{entity["value"]}") ? (entities_stats["reciclar_#{entity["value"]}"]+1) : 1
                        elsif entity["entity"].downcase == "glosario".downcase && entity["confidence"] > 0.85 &&  (intents.select{ |i| i["intent"].downcase == "Que_es".downcase }).length > 0
                            entities_stats["definicion_#{entity["value"]}"] = entities_stats.key?("definicion_#{entity["value"]}") ? (entities_stats["definicion_#{entity["value"]}"]+1) : 1
                        end
                    end

                    return entities_stats
                end
        end
        
    end
end