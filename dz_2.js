"use strict";

const company = {
  name: "Велика Компанія",
  type: "Головна компанія",
  platform: "Платформа для продажу квитків",
  sellsSolution: "Рішення для продажу квитків",
  clients: [
    {
      name: "Клієнт 1",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
      partners: [
        {
          name: "Клієнт 1.1",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
        },
        {
          name: "Клієнт 1.2",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
          partners: [
            {
              name: "Клієнт 1.2.1",
              type: "subSubSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
              partners: [
                {
                  name: "Клієнт 1.2.1.1",
                  type: "subSubSubSubCompany",
                  uses: "Рішення для продажу квитків",
                  sells: "Рішення для продажу квитків",
                },
                {
                  name: "Клієнт 1.2.1.2",
                  type: "subSubSubSubCompany",
                  uses: "Рішення для продажу квитків 5",
                  sells: "Рішення для продажу квитків 5",
                },
              ],
            },
          ],
        },
        {
          name: "Клієнт 1.3",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків 1.3",
          sells: "Рішення для продажу квитків 1.3",
          partners: [
            {
              name: "Клієнт 1.3.1",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків 1.3.1",
              sells: "Рішення для продажу квитків 1.3.1",
            },
          ],
        },
        {
          name: "Клієнт 1.4",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків 1.4",
          sells: "Рішення для продажу квитків 1.4",
          partners: [
            {
              name: "Клієнт 1.4.1",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків 1.4.1",
              sells: "Рішення для продажу квитків 1.4.1",
            },
          ],
        },
      ],
    },
    {
      name: "Клієнт 2",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
      partners: [
        {
          name: "Клієнт 2.1",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
        },
      ],
    },
  ],
};

function findValueByKey(companyName, structure) {
  if (structure.name === companyName) {
    // return `Name = ${structure.name}\nType = ${structure.type}\nUses = ${structure.uses}\nSells = ${structure.sells}`;
    let massage = "";
    for (let params in structure)
      massage += `${params} = ${structure[params]}\n`;
    return massage;
  } else {
    if (structure["clients"]) {
      for (let i = 0; i < structure.clients.length; i++) {
        var foundClients = findValueByKey(companyName, structure["clients"][i]);
        if (foundClients) {
          return foundClients;
        }
      }
    } else if (structure["partners"]) {
      for (let i = 0; i < structure.partners.length; i++) {
        var foundPartners = findValueByKey(
          companyName,
          structure["partners"][i]
        );
        if (foundPartners) {
          return foundPartners;
        }
      }
    }
  }
  return null;
}

let result = findValueByKey("Клієнт 1.2.1.2", company);
console.log(result);
