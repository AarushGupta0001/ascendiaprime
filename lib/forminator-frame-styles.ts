/** Dark-theme overrides injected into the Forminator iframe document. */
export const FORMINATOR_FRAME_STYLES = `
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    background: #0b142f !important;
    color: #ffffff !important;
  }

  body {
    padding: 2px 4px 6px !important;
    font-family: Poppins, system-ui, sans-serif !important;
    overflow-x: hidden !important;
  }

  .forminator-ui {
    background: transparent !important;
    color: #ffffff !important;
    max-width: 100%;
  }

  .forminator-row {
    display: flex !important;
    flex-wrap: wrap !important;
    margin-left: -8px !important;
    margin-right: -8px !important;
    margin-bottom: 0.45rem !important;
    box-sizing: border-box !important;
  }

  .forminator-col {
    box-sizing: border-box !important;
    padding-left: 8px !important;
    padding-right: 8px !important;
  }

  .forminator-col-6 {
    flex: 0 0 50% !important;
    max-width: 50% !important;
    width: 50% !important;
  }

  .forminator-col-12 {
    flex: 0 0 100% !important;
    max-width: 100% !important;
    width: 100% !important;
  }

  @media (max-width: 600px) {
    .forminator-col-6 {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      width: 100% !important;
    }
  }

  .forminator-field {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    margin-bottom: 0.45rem !important;
  }

  .forminator-label,
  .forminator-label-title,
  .forminator-field label,
  legend {
    color: #ffffff !important;
    font-weight: 600 !important;
    margin-bottom: 0.35rem !important;
    font-size: 0.92rem !important;
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
    padding: 0.72rem 1rem !important;
    min-height: 44px !important;
    box-sizing: border-box !important;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.04), 0 8px 20px rgba(0,0,0,.16) !important;
    font-family: inherit !important;
    font-size: 0.92rem !important;
  }

  .forminator-input:focus,
  .forminator-textarea:focus,
  .forminator-select--field:focus,
  .forminator-field--phone:focus,
  .forminator-ui input:focus,
  .forminator-ui textarea:focus,
  .forminator-ui select:focus {
    border-color: #3f8bf9 !important;
    box-shadow: 0 0 0 3px rgba(63, 139, 249, 0.25) !important;
  }

  .forminator-textarea {
    resize: vertical;
  }

  .forminator-input::placeholder,
  .forminator-textarea::placeholder {
    color: rgba(255, 255, 255, 0.45) !important;
    opacity: 1 !important;
  }

  .forminator-description {
    color: rgba(255, 255, 255, 0.6) !important;
    font-size: 0.75rem !important;
    margin-top: 0.2rem !important;
    margin-bottom: 0.2rem !important;
  }

  .forminator-button-submit,
  .forminator-ui button[type="submit"] {
    width: 100% !important;
    justify-content: center !important;
    margin-top: 0.35rem !important;
    padding: 0.85rem 1.5rem !important;
    border-radius: 999px !important;
    background: linear-gradient(135deg, #3f8bf9, #7469f8, #ab57f3, #e057d8) !important;
    color: #ffffff !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    box-shadow: 0 8px 25px rgba(116, 105, 248, 0.4) !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
  }

  .forminator-button-submit:hover,
  .forminator-ui button[type="submit"]:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  .forminator-button-submit:disabled,
  .forminator-ui button[type="submit"]:disabled {
    cursor: not-allowed !important;
    opacity: 0.65 !important;
  }

  .forminator-response-message.forminator-success {
    margin: 1rem auto !important;
    border: 1px solid rgba(63, 139, 249, 0.45) !important;
    border-radius: 0.85rem !important;
    background: rgba(63, 139, 249, 0.14) !important;
    color: #ffffff !important;
    padding: 1.25rem 1.5rem !important;
    text-align: center !important;
    font-size: 1.05rem !important;
    font-weight: 500 !important;
    line-height: 1.6 !important;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3) !important;
  }

  /* When form is successfully submitted, hide all form rows and helper text */
  form[data-forminator-submitted="true"] .forminator-row,
  form.forminator-submitted .forminator-row,
  form.form-submitted .forminator-row,
  .forminator-ui:has(.forminator-response-message.forminator-success) .forminator-row,
  .forminator-ui:has(.forminator-response-message.forminator-success) .form-submission-fallback {
    display: none !important;
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
    min-height: 2.9rem !important;
  }

  .select2-container--default .select2-selection--single .select2-selection__rendered {
    color: #ffffff !important;
    line-height: 2.8rem !important;
    padding-left: 1rem !important;
  }

  .select2-dropdown {
    background: #0b142f !important;
    border-color: rgba(63, 139, 249, 0.3) !important;
    color: #ffffff !important;
    border-radius: 0.75rem !important;
  }

  .select2-results__option {
    padding: 8px 12px !important;
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
    padding: 3px 0 0 !important;
    margin: 2px 0 0 !important;
    font-size: 12px !important;
    line-height: 1.4 !important;
  }

  .forminator-field {
    background: transparent !important;
  }

  .forminator-field.forminator-has_error .forminator-select--field,
  .forminator-field.forminator-has_error select {
    border-color: rgba(253, 164, 175, 0.55) !important;
  }

  /* Form submission fallback */
  .form-submission-fallback {
    margin: 0.65rem 0 0 !important;
    padding: 0 0 0.15rem !important;
    text-align: center !important;
    color: rgba(255, 255, 255, 0.72) !important;
    font-size: 0.85rem !important;
    line-height: 1.4 !important;
    font-style: italic !important;
  }

  .form-submission-fallback a {
    color: #7fb3ff !important;
    text-decoration: underline !important;
    text-underline-offset: 3px !important;
    font-weight: 600 !important;
    transition: color 0.2s ease !important;
  }

  .form-submission-fallback a:hover {
    color: #ab57f3 !important;
  }
`;
