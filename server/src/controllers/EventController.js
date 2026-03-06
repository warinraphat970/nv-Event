const { Event } = require('../models')

module.exports = {
  // get all event
  async index (req, res) {
    try {
      const events = await Event.findAll()
      res.send(events)
    } catch (err) {
      res.status(500).send({
        error: 'The events information was incorrect'
      })
    }
  },

  // create event
  async create (req, res) {
    try {
      const event = await Event.create(req.body)
      res.send(event.toJSON())
    } catch (err) {
      res.status(500).send({
        error: 'Create event incorrect'
      })
    }
  },

  // edit event, suspend, active
  async put (req, res) {
    try {
      await Event.update(req.body, {
        where: {
          id: req.params.eventId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Update event incorrect'
      })
    }
  },

  // delete event
  async remove (req, res) {
    try {
      const event = await Event.findOne({
        where: {
          id: req.params.eventId
        }
      })

      if (!event) {
        return res.status(403).send({
          error: 'The event information was incorrect'
        })
      }

      await event.destroy()
      res.send(event)
    } catch (err) {
      res.status(500).send({
        error: 'The event information was incorrect'
      })
    }
  },

  // get event by id
  async show (req, res) {
    try {
      const event = await Event.findByPk(req.params.eventId)
      res.send(event)
    } catch (err) {
      res.status(500).send({
        error: 'The event information was incorrect'
      })
    }
  }
}
