const mongoose = require('mongoose');

const workPermitSchema = new mongoose.Schema({
  permitId: {
    type: Number,
    unique: true,
    auto: true
  },
  permitName: {
    type: String,
    required: true
  },
  issuerObjectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  permitCreateTime: {
    type: Date,
    default: Date.now
  },
  fillPermissionID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  acceptPermissionIDs: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true
  },
  fillCompletedSubmission: {
    type: Boolean,
    default: false
  },
  p1IssueDate: {
    type: Date,
    default: Date.now
  },
  p1IsuNme: {
    type: String,
    required: true
  },
  p1IsuDepNme: {
    type: String,
    required: true
  },
  p1TStart: {
    type: String,
    default: ''
  },
  p1TEnd: {
    type: String,
    default: ''
  },
  p1ContractorNme: {
    type: String,
    required: true
  },
  p1ContractorComNme: {
    type: String,
    required: true
  },
  p1JobLoca: {
    type: String,
    required: true
  },
  p1JobDes: {
    type: String,
    required: true
  },
  DepOrSection: {
    type: String,
    required: true
  },
  p1CrosRef: {
    type: String,
    required: true
  },
  p2HazardsIdentified: {
    type: [String],
    default: []
  },
  p3DriveOrPanelInvolved: {
    type: String,
    default: ''
  },
  p3motorIsolation: {
    type: [String],
    default: []
  },
  p3motorCertifiedBy: {
    type: String,
    default: ''
  },
  p3MotorCrDate: {
    type: Date,
    default: null
  },
  p3motorCrTime: {
    type: String,
    default: ''
  },
  p3ServicesIsolated: {
    type: String,
    default: ''
  },
  p3HowServiceIsolated: {
    type: [String],
    default: []
  },
  p3serviceCertifiedBy: {
    type: String,
    default: ''
  },
  p3serviceCrDate: {
    type: Date,
    default: null
  },
  p3serviceCrTime: {
    type: String,
    default: ''
  },
  p4EquipmentInvolved: {
    type: String,
    default: ''
  },
  p4ProcessIsolated: {
    type: [String],
    default: []
  },
  p4ProcessCertifiedBy: {
    type: String,
    default: ''
  },
  p4ProcessCrDate: {
    type: Date,
    default: null
  },
  p4ProcessCrTime: {
    type: String,
    default: ''
  },
  p5PpeGeneral: {
    type: [String],
    default: []
  },
  p5PpeHotWork: {
    type: [String],
    default: []
  },
  p5PpeElectricalWork: {
    type: [String],
    default: []
  },
  p5PpeWorkAtHeight: {
    type: [String],
    default: []
  },
  p5PpeConfinedSpace: {
    type: [String],
    default: []
  },
  p6PrecautionGeneral: {
    type: [String],
    default: []
  },
  p6PrecautionHotWork: {
    type: [String],
    default: []
  },
  p6PrecautionElectricalWork: {
    type: [String],
    default: []
  },
  p6PrecautionWorkAtHeight: {
    type: [String],
    default: []
  },
  p6PrecautionConfinedSpace: {
    type: [String],
    default: []
  },
  p7WorkerDetails: {
    type: [
      {
        name: { type: String, required: true },
        NIC: { type: String, required: true },
        understood: { type: Boolean, default: false }
      }
    ],
    default: []
  },
  p6AcceptedHodORsafetyInchargeID: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  p6AcceptedHodORsafetyInchargeNme: {
    type: String,
    default: ''
  },
  p6AcceptHodORsafetyIncharge: {
    type: Boolean,
    default: false
  },
  p6AcceptHodORsafetyInchargeTime: {
    type: String,
    default: ''
  },
  p6AcceptAreaInchargeID: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  p6AcceptAreaInchargeNme: {
    type: String,
    default: ''
  },
  p6AcceptAreaIncharge: {
    type: Boolean,
    default: false
  },
  p6AcceptAreaInchargeTime: {
    type: String,
    default: ''
  },
  p6PermitAcceptedByContractor: {
    type: Boolean,
    default: false
  },
  p6PermitAcceptedByContractorTime: {
    type: String,
    default: ''
  },
  p8CloseAcceptedSupervisor: {
    type: Boolean,
    default: false
  },
  p8WorkcloseSupervisorTime: {
    type: String,
    default: ''
  },
  p8PermitClosedResponsibleID: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  p8permitclosedTime: {
    type: String,
    default: ''
  }
});

const WorkPermitModel = mongoose.model('WorkPermit', workPermitSchema);

module.exports = WorkPermitModel;
