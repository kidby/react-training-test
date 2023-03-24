import Ajv from 'ajv'

/**
 * Validates an array of questions against a provided JSON schema.
 * If the questions do not match the schema, the process will exit with an error.
 *
 * @param {Object[]} jsonData - An array of objects to be validated.
 * @param {Object} jsonSchema - The JSON schema to validate against.
 */
const validateData = (jsonData, jsonSchema) => {
  const ajv = new Ajv()
  const validate = ajv.compile(jsonSchema)

  if (!validate(jsonData)) {
    console.error('Invalid questions data:', validate.errors)
    process.exit(1)
  }
}

export default validateData
