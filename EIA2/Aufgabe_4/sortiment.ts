namespace A4{
    
export interface products{
    name:string,
    price: number,
}
    
    export let treeSpecies:products[]=[{name:"Keiner ausgewaehlt",price:0}, {name:"Tanne",price:55},{name:"Kiefer",price:60},{name:"Plastik Tanne",price:30}];
    export let holder:products[]=[{name:"Topf",price:10},{name:"Halterung",price:30},{name:"Keine",price:0}];
    export let christmasBall:products[]=[{name:"Keine ausgewaehlt",price:0},{name:"Rot",price:2},{name:"Gold",price:6},{name:"Glas",price:1}];
    export let lametta:products[]=[{name:"Keins ausgewaehlt",price:0},{name:"Gold",price:10},{name:"Gruen",price:10},{name:"Rot",price:10},{name:"Silber",price:10}];
    export let candleTyp:products[]=[{name:"Keine ausgewaehlt",price:0},{name:"Wachs",price:3},{name:"LED",price:5}];
    export let shipment:products[]=[{name:"Keine ausgewaehlt",price:0},{name:"DPD",price:20},{name:"DHL",price:25},{name:"UPS",price:30}];

}