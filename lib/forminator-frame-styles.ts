/** Dark-theme overrides injected into the Forminator iframe document. */
export const FORMINATOR_FRAME_STYLES = `
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    background: #0b142f !important;
    color: #ffffff !important;
  }

  body {
    padding: 6px 4px 14px !important;
    font-family: Poppins, system-ui, sans-serif !important;
    overflow-x: hidden !important;
  }

  .forminator-ui {
    background: transparent !important;
    color: #ffffff !important;
  }

  .forminator-row,
  .forminator-field {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }

  body {
    padding: 4px 2px 12px;
    font-family: Poppins, system-ui, sans-serif;
  }

  .forminator-ui {
    max-width: 100%;
    color: #ffffff !important;
  }

  .forminator-label,
  .forminator-label-title,
  .forminator-field label,
  legend {
    color: #ffffff !important;
    font-weight: 600 !important;
    margin-bottom: 0.5rem !important;
  }

  .forminator-required {
    color: #3f8bf9 !important;
  }

  .forminator-input,
  .forminator-textarea,
  .forminator-select--field,
  .forminator-field--phone,
  .forminator-ui input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="button"]),
  .forminator-ui textarea,
  .forminator-ui select {
    width: 100% !important;
    background: rgba(15, 23, 42, 0.85) !important;
    border: 1px solid rgba(63, 139, 249, 0.3) !important;
    color: #ffffff !important;
    border-radius: 0.75rem !important;
    padding: 0.78rem 1rem !important;
    min-height: 48px !important;
    box-sizing: border-box !important;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.04), 0 8px 20px rgba(0,0,0,.16) !important;
    font-family: inherit !important;
    font-size: 0.92rem !important;
  }

  .forminator-input::placeholder,
  .forminator-textarea::placeholder {
    color: rgba(255, 255, 255, 0.45) !important;
    opacity: 1 !important;
  }

  .forminator-description,
  .forminator-error-message,
  .forminator-response-message,
  .forminator-field-description {
    color: rgba(255, 255, 255, 0.72) !important;
  }

  .forminator-button-submit,
  .forminator-ui button[type="submit"] {
    width: 100% !important;
    justify-content: center !important;
    margin-top: 0.5rem !important;
    padding: 1rem 1.5rem !important;
    border-radius: 999px !important;
    background: linear-gradient(135deg, #3f8bf9, #7469f8, #ab57f3, #e057d8) !important;
    color: #ffffff !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    box-shadow: 0 8px 25px rgba(116, 105, 248, 0.4) !important;
    font-weight: 600 !important;
    cursor: pointer !important;
  }

  .forminator-button-submit:hover,
  .forminator-ui button[type="submit"]:hover {
    filter: brightness(1.08);
  }

  .forminator-button-submit:disabled,
  .forminator-ui button[type="submit"]:disabled {
    cursor: not-allowed !important;
    opacity: 0.65 !important;
  }

  .forminator-response-message.forminator-success {
    margin-bottom: 0.78rem !important;
    border: 1px solid rgba(63, 139, 249, 0.45) !important;
    border-radius: 0.75rem !important;
    background: rgba(63, 139, 249, 0.12) !important;
    color: #dbeafe !important;
    padding: 1rem 1.2rem !important;
  }

  .forminator-row,
  .forminator-field {
    margin-bottom: 0.78rem !important;
  }

  .iti__selected-dial-code,
  .iti__arrow {
    color: #ffffff !important;
  }

  .iti__country-list {
    background: #0b142f !important;
    color: #ffffff !important;
    border-color: rgba(63, 139, 249, 0.3) !important;
  }

  .select2-container--default .select2-selection--single {
    background: rgba(15, 23, 42, 0.85) !important;
    border: 1px solid rgba(63, 139, 249, 0.3) !important;
    color: #ffffff !important;
    border-radius: 0.75rem !important;
    min-height: 3.25rem !important;
  }

  .select2-container--default .select2-selection--single .select2-selection__rendered {
    color: #ffffff !important;
    line-height: 3rem !important;
    padding-left: 1rem !important;
  }

  .select2-dropdown {
    background: #0b142f !important;
    border-color: rgba(63, 139, 249, 0.3) !important;
    color: #ffffff !important;
  }

  .select2-results__option--highlighted[aria-selected] {
    background: rgba(63, 139, 249, 0.35) !important;
  }


/* Clean Forminator validation messages */
.forminator-error-message,
.forminator-error,
.forminator-field .forminator-error-message {
    background: transparent !important;
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
    color: #fda4af !important;
    padding: 5px 0 !important;
    margin: 4px 0 0 !important;
    min-height: 0 !important;
    height: auto !important;
    width: auto !important;
    border-radius: 0 !important;
    font-size: 12px !important;
    line-height: 1.4 !important;
}

/* Don't let validation create a large coloured block */
.forminator-field {
    background: transparent !important;
}

.forminator-field.forminator-has_error .forminator-select--field,
.forminator-field.forminator-has_error select {
    border-color: rgba(253, 164, 175, 0.55) !important;
}



  /* Form submission fallback */
  .form-submission-fallback {
    margin: 1.25rem 0 0;
    padding: 0.25rem 0 0.5rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.9rem;
    line-height: 1.5;
    font-style: italic;
  }

  .form-submission-fallback a {
    color: #7fb3ff;
    text-decoration: underline;
    text-underline-offset: 3px;
    font-weight: 600;
    transition: color 0.2s ease;
  }

  .form-submission-fallback a:hover {
    color: #ab57f3;
  }

`;
