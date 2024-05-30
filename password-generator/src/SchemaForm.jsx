import { useState } from "react";

const data = {
  form: {
    sections: [
      {
        order: 1,
        section_title: "Basic Information",
        fields: [
          {
            name: "name",
            label: "Name",
            required: "true",
            data_type: "String",
            html_element: "text",
          },
          {
            name: "email",
            label: "Email",
            hidden: false,
            required: true,
            data_type: "String",
            html_element: "email",
          },
          {
            name: "phone",
            label: "Phone",
            required: true,
            data_type: "Number",
            html_elements: "number",
          },
          {
            name: "age",
            label: "Age",
            hidden: false,
            options: [],
            required: true,
            data_type: "Number",
            html_elements: "number",
          },
        ],
      },
    ],
  },
};

const SchemaForm = () => {
  const [info, setInfo] = useState("");

  const handleSubmit = (e) => {

    e.prevenDefault();

    const formData = new FormData(e.target);
    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    setInfo(formDataObject);
    console.log("Data submitted:", formDataObject);
  };
  return (
    <div className="container h-auto w-1/2">
      <form onSubmit={handleSubmit}>
        <div className="">
          <h1 className="uppercase text-xl font-bold mt-0 mb-6 pl-10">
          </h1>
          {data.form.sections.fields.map((inputData) => {
            return (
              <div
                key={inputData.fields.label}
                className="form-floating mb-3 xl:w-96"
              >
                <label className="">{inputData.label}: </label>

                <input
                  className="outline form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                  type={inputData.html_element}
                  name={inputData.name}
                  id={inputData.name}
                  required={inputData.required}
                  value={info}
                />
              </div>
            );
          })}
        </div>
        <button
          type="onSubmit"
          className="h-8  w-1/2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SchemaForm;
