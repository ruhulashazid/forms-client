<div>
  {/* Button to Save and Open Form */}
  <div className="button-container">
    {!showResponse && (
      <Button variant="contained" color="primary" onClick={handleSaveForm}>
        Save Form
      </Button>
    )}
    {!showResponse && showSaveButton && (
      <Button variant="contained" color="primary" onClick={handleOpenForm}>
        Open
      </Button>
    )}
  </div>

  {/* Iterate over forms */}
  {!showResponse &&
    forms.map((form) => (
      <div key={form.id} className={classes.formContainer}>
        {/* Title input */}
        <input
          className="question-form-top-name"
          type="text"
          placeholder="Untitled Form"
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Iterate over form questions */}
        {form.questions.map((question) => (
          <div key={question.id} className={classes.questionContainer}>
            {/* Question TextField and Answer Type Selector */}
            <div className={classes.questionTop}>
              <TextField
                label="Question Text"
                value={question.questionText}
                onChange={(e) =>
                  handleQuestionTextChange(form.id, question.id, e.target.value)
                }
                fullWidth
              />
              <FormControl fullWidth>
                <InputLabel id={`answer-type-label-${question.id}`}>
                  Answer Type
                </InputLabel>
                <Select
                  labelId={`answer-type-label-${question.id}`}
                  value={question.answerType}
                  onChange={(e) =>
                    handleAnswerTypeChange(
                      form.id,
                      question.id,
                      e.target.value
                    )
                  }
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="input">Input</MenuItem>
                  <MenuItem value="checkbox">Checkbox</MenuItem>
                  <MenuItem value="radio">Radio</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Options rendering for checkboxes or radio buttons */}
            {question.answerType === "checkbox" && (
              <>
                {question.options.map((option, index) => (
                  <div key={index} className={classes.optionContainer}>
                    <TextField
                      label={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) =>
                        handleOptionChange(
                          form.id,
                          question.id,
                          index,
                          e.target.value
                        )
                      }
                    />
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      className={classes.deleteButton}
                      onClick={() => handleDeleteQuestion(form.id, question.id)}
                      startIcon={<DeleteIcon />}
                    />
                  </div>
                ))}
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => handleAddOption(form.id, question.id)}
                  className={classes.addButton}
                  startIcon={<AddIcon />}
                >
                  Add Option
                </Button>
              </>
            )}

            {question.answerType === "radio" && (
              <>
                {question.options.map((option, index) => (
                  <div key={index} className={classes.optionContainer}>
                    <TextField
                      label={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) =>
                        handleOptionChange(
                          form.id,
                          question.id,
                          index,
                          e.target.value
                        )
                      }
                    />
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      className={classes.deleteButton}
                      onClick={() => handleDeleteQuestion(form.id, question.id)}
                      startIcon={<DeleteIcon />}
                    />
                  </div>
                ))}
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => handleAddOption(form.id, question.id)}
                  className={classes.addButton}
                  startIcon={<AddIcon />}
                >
                  Add Option
                </Button>
              </>
            )}

            {/* Short text input for 'input' type questions */}
            {question.answerType === "input" && (
              <input className="short-text" type="text" disabled />
            )}

            {/* Delete and Copy question buttons */}
            <div>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => handleDeleteQuestion(form.id, question.id)}
                className={classes.deleteButton}
                startIcon={<DeleteIcon />}
              />
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => handleCopyQuestion(form.id, question.id)}
                className={classes.addButton}
                startIcon={<FileCopyIcon />}
              />
            </div>
          </div>
        ))}

        {/* Button to Add New Question */}
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => handleAddQuestion(form.id)}
          startIcon={<AddIcon />}
        >
          Add New Question
        </Button>
      </div>
    ))}

  {/* Render the FormRenderer component if the form is saved */}
  {showResponse && showSaveButton && (
    <FormRenderer
      formData={forms}
      id={param.id}
      setShowResponse={setShowResponse}
    />
  )}
</div>
