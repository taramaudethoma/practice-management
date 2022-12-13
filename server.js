const express = require('express');
const app = express();

const db = require('./models');

app.use(express.json());
app.use(express.static(__dirname + '/public'))

app.get('/api/doctors', (req, res) => {
  console.log('GET /api/doctors');
  db.doctor.findAll().then((results) => {
    res.json(results);
  })
})

app.get('/api/patients', (req, res) => {
  console.log('GET /api/patients');
  db.patient.findAll().then((results) => {
    res.json(results);
  })
})

app.get('/api/doctors/:doctor_id/patients', (req, res) => {
  const doctor_id = Number(req.params.doctor_id);

  if (isNaN(doctor_id)) {
    res.json({ error: "doctor_id is not a number" });
    return;
  }

  db.doctor.findByPk(doctor_id, { include: db.patient }).then((doctor) => {
    res.json(doctor);
  })
})

app.get('/api/patients/:patient_id/doctors', (req, res) => {
  const patient_id = Number(req.params.patient_id);

  if (isNaN(patient_id)) {
    res.json({ error: "patient_id is not a number" });
    return;
  }

  db.patient.findByPk(patient_id, { include: db.doctor }).then((patient) => {
    res.json(patient);
  })
})

app.get('/api/doctors/:doctor_id/patients', (req, res) => {
  const doctor_id = Number(req.params.doctor_id);

  if (isNaN(doctor_id)) {
    res.json({ error: "doctor_id is not a number" });
    return;
  }

  db.doctor.findByPk(doctor_id, { include: db.patient }).then((doctor) => {
    res.json(doctor);
  })
})

app.get('/api/patients/:patient_id/doctors', (req, res) => {
  const patient_id = Number(req.params.patient_id);

  if (isNaN(patient_id)) {
    res.json({ error: "patient_id is not a number" });
    return;
  }

  db.patient.findByPk(patient_id, { include: db.doctor }).then((patient) => {
    res.json(patient);
  })
})

app.post("/api/doctors", (req, res) => {
  const name = req.body.name;
  const specialty = req.body.specialty;

  if (name === "" || specialty === "") {
    res.json({ error: "Please fill in required fields" });
    return;
  }

  db.doctor.create({ name: name, specialty: specialty }).then(result => {
    res.json(result);
  })

})

app.post("/api/patients", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const insurance = req.body.insurance;

  if (name === "" || email === "" || insurance ==="") {
    res.json({ error: "Please fill in required fields" });
    return;
  }

  db.patient.create({ name: name, email: email, insurance: insurance }).then(result => {
    res.json(result);
  })

})

app.post("/api/practice", (req, res) => {
  const doctor_id = Number(req.body.doctor_id);
  const patient_id = Number(req.body.patient_id);
  

  if (doctor_id === "" || patient_id === "" ) {
    res.json({ error: "Please fill in required fields" });
    return;
  }

  db.practice.create({ doctor_id: doctor_id, patient_id: patient_id }).then(result => {
    res.json(result);
  })

})

app.delete("/api/doctors/:doctor_id", (req, res) => {
  const doctor_id = Number(req.params.doctor_id);

  if (isNaN(doctor_id)) {
    res.json({ error: "doctor_id is not a number" });
    return;
  }

  db.doctor.destroy({ where: { id: doctor_id } }).then((result) => {
    res.json({ status: "OK" })
  }).catch((e) => {
    res.json({ error: "failed" })
  })
})

app.delete("/api/patients/:patient_id", (req, res) => {
  const patient_id = Number(req.params.patient_id);
  console.log(req.params)

  if (isNaN(patient_id)) {
    res.json({ error: "patient_id is not a number" });
    return;
  }

  db.patient.destroy({ where: { id: patient_id } }).then((result) => {
    res.json({ status: "OK" })
  }).catch((e) => {
    res.json({ error: "failed" })
  })
})


app.patch("/api/doctors/:doctor_id", (req, res) => {
  const doctor_id = Number(req.params.doctor_id);

  if (isNaN(doctor_id)) {
    res.json({ error: "doctor_id is not a number" });
    return;
  }

  db.doctor.update({ name: req.body.name, specialty: req.body.specialty }, { where: { id: doctor_id } }).then((result) => {
    console.log(result)
    res.json({ status: "OK" })
  })
})

app.patch("/api/patients/:patient_id", (req, res) => {
  const patient_id = Number(req.params.patient_id);

  if (isNaN(patient_id)) {
    res.json({ error: "patient_id is not a number" });
    return;
  }

  db.patient.update({ name: req.body.name, email: req.body.email, insurance: req.body.insurance }, { where: { id: patient_id } }).then((result) => {
    console.log(result)
    res.json({ status: "OK" })
  })
})


app.listen(3000, () =>  {
  console.log('app started in port 3000');
})