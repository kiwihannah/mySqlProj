const db = require("../models");
const Users = db.tutorials;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ });
  } else {
    const { name, email, password, phone, birthday } = req.body;
    Users.Op({ name, email, password, phone, birthday });
    console.log(`[User Created ${name}]`);
    res.status(201).send({ });
  }
}
// Retrieve all Tutorials from the database.
// export function findAll(req, res) {
//   const title = req.query.title;
//   var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
//   Tutorial.findAll({ where: condition })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials.",
//       });
//     });
// }
// // Find a single Tutorial with an id
// export function findOne(req, res) {
//   const id = req.params.id;
//   Tutorial.findByPk(id)
//     .then((data) => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `Cannot find Tutorial with id=${id}.`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error retrieving Tutorial with id=" + id,
//       });
//     });
// }
// // Update a Tutorial by the id in the request
// export function update(req, res) {
//   const id = req.params.id;
//   Tutorial.update(req.body, {
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: "Tutorial was updated successfully.",
//         });
//       } else {
//         res.send({
//           message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error updating Tutorial with id=" + id,
//       });
//     });
// }
// // Delete a Tutorial with the specified id in the request
// const _delete = (req, res) => {
//   const id = req.params.id;
//   Tutorial.destroy({
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: "Tutorial was deleted successfully!",
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Could not delete Tutorial with id=" + id,
//       });
//     });
// };
// export { _delete as delete };
// // Delete all Tutorials from the database.
// export function deleteAll(req, res) {
//   Tutorial.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then((nums) => {
//       res.send({ message: `${nums} Tutorials were deleted successfully!` });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all tutorials.",
//       });
//     });
// }
// // Find all published Tutorials
// export function findAllPublished(req, res) {
//   Tutorial.findAll({ where: { published: true } })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials.",
//       });
//     });
// }
