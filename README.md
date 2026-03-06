<<<<<<< HEAD
# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
=======
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
>>>>>>> 55b4ffc5b9e032f8d99aed568c42b72bf7394d34
