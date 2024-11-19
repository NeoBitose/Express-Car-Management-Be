"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("bismillah", 10);
    const profileImageUrl =
      "https://ik.imagekit.io/epqufjrrv/boy.jpg?updatedAt=1732007400483";

    return queryInterface.bulkInsert("Users", [
      {
        email: "alifrmdn@example.com",
        password: hashedPassword,
        firstName: "Alif",
        lastName: "Ramadhan",
        phone: "1234567890",
        fotoProfil: profileImageUrl,
        role: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "admin@example.com",
        password: hashedPassword,
        firstName: "Jane",
        lastName: "Doe",
        phone: "0987654321",
        fotoProfil: profileImageUrl,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "member@example.com",
        password: hashedPassword,
        firstName: "Eric",
        lastName: "Joe",
        phone: "0987654321",
        fotoProfil: profileImageUrl,
        role: "member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "sarah.wilson@example.com",
        password: hashedPassword,
        firstName: "Sarah",
        lastName: "Wilson",
        phone: "1122334455",
        fotoProfil: profileImageUrl,
        role: "member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "michael.brown@example.com",
        password: hashedPassword,
        firstName: "Michael",
        lastName: "Brown",
        phone: "2233445566",
        fotoProfil: profileImageUrl,
        role: "member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "emma.davis@example.com",
        password: hashedPassword,
        firstName: "Emma",
        lastName: "Davis",
        phone: "3344556677",
        fotoProfil: profileImageUrl,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "james.miller@example.com",
        password: hashedPassword,
        firstName: "James",
        lastName: "Miller",
        phone: "4455667788",
        fotoProfil: profileImageUrl,
        role: "member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "olivia.garcia@example.com",
        password: hashedPassword,
        firstName: "Olivia",
        lastName: "Garcia",
        phone: "5566778899",
        fotoProfil: profileImageUrl,
        role: "member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "william.anderson@example.com",
        password: hashedPassword,
        firstName: "William",
        lastName: "Anderson",
        phone: "6677889900",
        fotoProfil: profileImageUrl,
        role: "member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "sophia.martinez@example.com",
        password: hashedPassword,
        firstName: "Sophia",
        lastName: "Martinez",
        phone: "7788990011",
        fotoProfil: profileImageUrl,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "lucas.taylor@example.com",
        password: hashedPassword,
        firstName: "Lucas",
        lastName: "Taylor",
        phone: "8899001122",
        fotoProfil: profileImageUrl,
        role: "member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "ava.thomas@example.com",
        password: hashedPassword,
        firstName: "Ava",
        lastName: "Thomas",
        phone: "9900112233",
        fotoProfil: profileImageUrl,
        role: "member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "henry.moore@example.com",
        password: hashedPassword,
        firstName: "Henry",
        lastName: "Moore",
        phone: "0011223344",
        fotoProfil: profileImageUrl,
        role: "member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "isabella.white@example.com",
        password: hashedPassword,
        firstName: "Isabella",
        lastName: "White",
        phone: "1122334455",
        fotoProfil: profileImageUrl,
        role: "member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "daniel.lee@example.com",
        password: hashedPassword,
        firstName: "Daniel",
        lastName: "Lee",
        phone: "2233445566",
        fotoProfil: profileImageUrl,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "mia.harris@example.com",
        password: hashedPassword,
        firstName: "Mia",
        lastName: "Harris",
        phone: "3344556677",
        fotoProfil: profileImageUrl,
        role: "member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "alexander.clark@example.com",
        password: hashedPassword,
        firstName: "Alexander",
        lastName: "Clark",
        phone: "4455667788",
        fotoProfil: profileImageUrl,
        role: "member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "charlotte.lewis@example.com",
        password: hashedPassword,
        firstName: "Charlotte",
        lastName: "Lewis",
        phone: "5566778899",
        fotoProfil: profileImageUrl,
        role: "member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "benjamin.young@example.com",
        password: hashedPassword,
        firstName: "Benjamin",
        lastName: "Young",
        phone: "6677889900",
        fotoProfil: profileImageUrl,
        role: "member",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "amelia.walker@example.com",
        password: hashedPassword,
        firstName: "Amelia",
        lastName: "Walker",
        phone: "7788990011",
        fotoProfil: profileImageUrl,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
