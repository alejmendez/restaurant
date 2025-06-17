/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_260225600")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number1042943290",
    "max": null,
    "min": 0,
    "name": "quantity_used",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_260225600")

  // remove field
  collection.fields.removeById("number1042943290")

  return app.save(collection)
})
