import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { addSuggestion } from '../../api/feedback';
import TextInput from '../TextInput/TextInput';
import YellowButton from '../YellowButton/YellowButton';
import styles from './SuggestionForm.module.scss';

const SuggestionForm = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = (values, form) => {
    addSuggestion(values).then(() => {
      setSuccessMessage('Suggestion submitted! Thank you for your feedback');
      setTimeout(() => {
        form.initialize({});
        setTimeout(() => setSuccessMessage(null), 100);
      }, 5000);
    });
  };

  const validate = ({ suggestion }) => {
    const errors = {};

    if (!suggestion) {
      errors.suggestion = 'Suggestion is required';
    }

    return errors;
  };

  return (
    <div className={styles.suggestionForm}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.fieldContainer}>
              <Field name="name">
                {fieldProps =>
                  <TextInput
                    label="Name" {...fieldProps}
                    style={{ maxWidth: '300px' }}
                  />
                }
              </Field>
            </div>
            <div className={styles.fieldContainer}>
              <Field name="suggestion">
                {fieldProps => (
                  <TextInput
                    label="Suggestion"
                    style={{ maxWidth: '500px' }}
                    multiline
                    {...fieldProps}
                  />
                )}
              </Field>
            </div>
            {successMessage && (
              <div className={styles.successText}>
                {successMessage}
              </div>
            )}
            <div className={styles.fieldContainer}>
              <Field name="submit" className={styles.submit}>
                {() => (
                  <YellowButton
                    type="submit"
                    variant="contained"
                    disabled={submitting || pristine || !!successMessage}
                  >
                    Submit
                  </YellowButton>
                )}
              </Field>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default SuggestionForm;
