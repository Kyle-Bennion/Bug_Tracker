import express from 'express'
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { noteService } from '../services/NoteService.js'



//PUBLIC
export class NotesController extends BaseController {
  constructor() {
    super("api/notes")
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      // .get('/bugs/:id/notes', this.getAllNotesByBugId)
      .post('', this.createNote)
      .delete('/:id', this.delete)
  }

  // async getAllNotesByBugId(req, res, next) {
  //   try {
  //     //only gets lists by user who is logged in
  //     let data = await noteService.getAllNotesByBugId(req.params.id)
  //     return res.send(data)
  //   }
  //   catch (err) { next(err) }
  // }

  async createNote(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await noteService.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      await noteService.delete(req.params.id, req.userInfo.email)
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
}
