import mongoose from "mongoose"
let Schema = mongoose.Schema

const Bug = new Schema({
  closed: { type: Boolean, required: true, default: false },
  description: { type: String, required: true },
  title: { type: String, required: true },
  closedDate: { type: Date },
  creatorEmail: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

Bug.virtual("creator",
  {
    localField: "creatorEmail",
    ref: "Profile",
    foreignField: "email",
    justOne: true
  })

//CASCADE ON DELETE
// Board.pre('findOneAndRemove', function (next) {
//   //lets find all the lists and remove them
//   Promise.all([
//     dbContext.List.deleteMany({ boardId: this._conditions._id })
//   ])
//     .then(() => next())
//     .catch(err => next(err))
// })

export default Bug