'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  

  let doctors = [];

    for (let i = 0; i < 5; i++) {

      doctors.push({
        name: `doctor ${i}`,
        specialty: `specialty${i}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
    }

    let patients = [];

    for (let i = 1; i < 5; i++) {

      patients.push({
        name: `patient${i}`,
        email: `email${i}@gmail.com`,
        insurance: `insurance`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
    }
    for (let i = 1; i < 10; i++) {

      patients.push({
        name: `patient2${i}`,
        email: `emai2l${i}@gmail.com`,
        insurance: `insurance2`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
    }
    let practice = [];

    for (let i = 0; i < 5; i++) {

      practice.push({
        doctor_id: `doctor_id ${i}`,
        patient_id: `patient_id${i}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
    }

    await queryInterface.bulkInsert('doctors', doctors);
    await queryInterface.bulkInsert('patients', patients);
    await queryInterface.bulkInsert('practice', practice);
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('doctors', null, {});
     await queryInterface.bulkDelete('patients', null, {});
     await queryInterface.bulkDelete('practice', null, {});
  }
};
