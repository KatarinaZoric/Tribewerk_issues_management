const express = require('express');
const Agent = require('../models/agent');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const agents = await Agent.findAll();
    res.json(agents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
    try {
        const agent = await Agent.findByPk(req.params.id);  

        if (!agent) {
            return res.status(404).json({ message: "Agent not found" });
        }

        res.json(agent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
