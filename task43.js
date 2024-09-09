function wooCalculate(cN, tN, bN){
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const totalChairWood = perChair*cN;
    const totalTableWood = perTable*tN;
    const totalBedWood = perBed*bN;
    const totalWood = totalChairWood+totalTableWood+totalBedWood;
    return `${totalWood} cft`;
}

console.log(wooCalculate(6,2,1));