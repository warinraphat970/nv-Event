# Project: nv-Event

This project is a variation of the nv-webblog68 project, extended with a new model: **Event**.

## New Model: Event

### Schema
- **title**: STRING\n- **description**: TEXT\n- **location**: STRING\n- **date**: DATE\n- **organizer**: STRING

## New Controller
A dedicated controller `EventController` has been added to handle CRUD operations for `Event`.

## New Routes
The following routes have been added to `server/src/routes.js`:

- **GET** `/events` - Get all events
- **POST** `/event` - Create a new event
- **GET** `/event/:eventId` - Get a event by ID
- **PUT** `/event/:eventId` - Update a event
- **DELETE** `/event/:eventId` - Delete a event

## Usage
Follow standard setup instructions for Client and Server.
