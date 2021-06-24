import React from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, TextField } from '@material-ui/core';



const InputUrl = ({ setSelectedUrl, urlHistory
}) => {
  const urlSchema = Yup.object().shape({
    url: Yup.string()
      .matches(/^(http|https):\/\/./gi, 'Enter a valid URL in HTTP/S format')
  });

  const formik = useFormik({
    initialValues: {
      url: "",
    },
    validationSchema: urlSchema,
    onSubmit: (values) => {
      let request = values.url
      setSelectedUrl(request)
    },
  })

  return <>
    <div className="selector">
      <form onSubmit={formik.handleSubmit}>
        <Autocomplete
          placeholder="Enter a valid URL"
          options={urlHistory?.map((option) => option.label).reverse()}
          onChange={(e, value) => formik.setFieldValue("url", value)}
          renderInput={(params) => (
            <>
              <TextField {...params}
                name="url"
                onChange={formik.handleChange}
                value={formik.url}
                label="Enter a valid URL" margin="normal" variant="outlined" />
            </>
          )}
        />
        <Button className="search" type="submit" variant="contained">Search</Button>

        {formik.errors.url && formik.touched.url ? <div className="validation">{formik.errors.url}</div> : null}
      </form>
    </div>
  </>
}

export default InputUrl