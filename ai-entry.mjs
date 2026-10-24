import {attachFeature} from './ai-feature.mjs';
attachFeature({task:"nominal.compile-requirement.v1",title:"Nominal \u00b7 live AI capability",getSource:()=>!document.querySelector('#source').value.trim()?'':JSON.stringify({contract:{temperature_max:Number(document.querySelector('#threshold').value),voltage_min:4.8,voltage_max:5.2},telemetry:document.querySelector('#source').value})});
