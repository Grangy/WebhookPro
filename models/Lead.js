// models/Lead.js
const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: false 
  },
  phone: { 
    type: String, 
    required: false 
  },
  source: { 
    type: String, 
    enum: ['facebook', 'google', 'website', 'other'], 
    required: false 
  },
  status: { 
    type: String, 
    enum: ['new', 'contacted', 'qualified', 'converted', 'lost'], 
    default: 'new' 
  },
  assignedTo: { 
    type: String, 
    required: false 
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  },
  additionalData: { 
    type: Object, 
    required: false 
  },
  // utmInfo будет хранить объект с параметрами
  utmInfo: {
    utmSource: { 
      type: String, 
      required: false 
    },
    utmMedium: { 
      type: String, 
      required: false 
    },
    utmCampaign: { 
      type: String, 
      required: false 
    },
    utmTerm: { 
      type: String, 
      required: false 
    },
    utmContent: { 
      type: String, 
      required: false 
    }
  }
});

module.exports = mongoose.model('Lead', leadSchema);
