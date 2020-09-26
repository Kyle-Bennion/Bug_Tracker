import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class NoteService {

  async getAllNotesByBugId(bugId, userEmail) {
    return await dbContext.Notes.find({ bugId, creatorEmail: userEmail }).populate("creator", "name picture")
  }

  async create(rawData) {
    let data = await dbContext.Bugs.create(rawData)
    return data
  }

  async delete(id, userEmail) {
    let data = await dbContext.Bugs.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
  }

}


export const noteService = new NoteService()