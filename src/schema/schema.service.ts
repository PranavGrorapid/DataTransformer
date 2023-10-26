import { Injectable } from '@nestjs/common';

@Injectable()
export class SchemaService {
  // This method transforms input data into the desired schema format.

  transformInputToSchema(inputData: Record<string, any>) {
    const schema = [];

    console.log('service called ....', inputData);

    // Defining a mapping of data types to their desired output format

    const dataTypesMapping = {
      number: 'NUMBER',
      string: 'TEXT',
      object: 'OBJECT',
    };

    // Iterating through each key-value pair in the input data.

    for (const key in inputData) {
      console.log('keyyy', key);



      if (inputData.hasOwnProperty(key)) {
        const value = inputData[key];
        console.log('value', value);

        // Getting the value and determine its data type.

        console.log('type of value', typeof value);
        const dataType = dataTypesMapping[typeof value] || 'UNKNOWN';
        console.log('dataType', dataType);

        // Creating a schema object for the current field.

        const schemaObject = {
          name: key,
          label: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' '), // Capitalizing and replace underscores with spaces
          dataType: dataType,
          group: 'Product Collect',
          entityType: 'product-collect',
          description: '',
          type: 'DIMENSION',
          source: 'product-collect',
        };

        console.log('schemaObject', schemaObject);

        schema.push(schemaObject);
      }
    }
    console.log('schema', schema);
    return schema;
  }
}
