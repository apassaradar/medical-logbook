{
  data.map((res) => (
    
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        className={classes.field}
        onChange={(e) => setHN(e.target.value)}
        label="H.N."
        variant="outlined"
        color="secondary"
        fullWidth
        required
        error={hnError}
      >{res.hn}</TextField>
      <TextField
        className={classes.field}
        onChange={(e) => setPatientName(e.target.value)}
        label="Patient Name"
        variant="outlined"
        color="secondary"
        fullWidth
        required
        error={patientNameError}
      />
      <TextField
        className={classes.field}
        onChange={(e) => setDiagnosis(e.target.value)}
        label="Diagnosis"
        variant="outlined"
        color="secondary"
        multiline
        rows={4}
        fullWidth
        required
        error={diagnosisError}
      />

      <Grid container>
        <Grid item xs={6}>
          <FormControl className={classes.select}>
            <InputLabel shrink>Ward</InputLabel>
            <Select
              labelId="select"
              id="ward-select"
              displayEmpty
              value={ward}
              required
              error={wardError}
              onChange={handleChangeWard}
            >
              <MenuItem value={""}> </MenuItem>
              <MenuItem value={1}>Ward 1</MenuItem>
              <MenuItem value={2}>Ward 2</MenuItem>
              <MenuItem value={3}>Ward 3</MenuItem>
              <MenuItem value={4}>Ward 4</MenuItem>
              <MenuItem value={5}>Ward 5</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.select}>
            <InputLabel shrink>Unit</InputLabel>
            <Select
              labelId="select"
              id="unit-select"
              displayEmpty
              value={unit}
              required
              error={unitError}
              onChange={handleChangeUnit}
            >
              <MenuItem value={""}> </MenuItem>
              <MenuItem value={1}>Unit 1</MenuItem>
              <MenuItem value={2}>Unit 2</MenuItem>
              <MenuItem value={3}>Unit 3</MenuItem>
              <MenuItem value={4}>Unit 4</MenuItem>
              <MenuItem value={5}>Unit 5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Button
        className={classes.submitbtn}
        type="submit"
        color="success"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        onClick={addData}
      >
        Submit
      </Button>
    </form>
  ));
}
