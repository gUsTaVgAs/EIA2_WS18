namespace A5 {

    export interface products {
        typ: string,
        name: string,
        price: number,
    }

    export interface assoArray {
        [key: string]: products[];
    }

    export let assoProducts: assoArray = {
        "treeSpecies": [ {typ: "Baum", name: "Tanne", price: 55 }, {typ: "Baum", name: "Kiefer", price: 60 }, {typ: "Baum", name: "Plastik Tanne", price: 30 }],
        "holder": [{typ: "Halterung", name: "Keine", price: 0 }, {typ: "Halterung", name: "Topf", price: 10 }, {typ: "Halterung", name: "Halterung", price: 30 }],
        "christmasBall": [ {typ: "Kugeln", name: "Rot", price: 2 }, {typ: "Kugeln", name: "Gold", price: 6 }, {typ: "Kugeln", name: "Glas", price: 1 }],
        "lametta": [ {typ: "Lametta", name: "Gold", price: 10 }, {typ: "Lametta", name: "Gruen", price: 10 }, {typ: "Lametta", name: "Rot", price: 10 }, {typ: "Lametta", name: "Silber", price: 10 }],
        "candleTyp": [{typ: "Kerzen", name: "Wachs", price: 3 }, {typ: "Kerzen", name: "LED", price: 5 }],
        "shipment": [{typ: "Lieferoptionen", name:"DPD", price:20}, {typ: "Lieferoptionen", name:"DHL", price:25}, {typ: "Lieferoptionen", name:"UPS", price:30}]
};

}