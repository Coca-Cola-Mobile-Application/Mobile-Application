const WorkPermitModel = require("../../model/WorkPermitModel/WorkPermitModel");
const UserModel = require("../../model/UserModel/userModel");
const mongoose = require("mongoose");

// Handle the work permit creation
const WorkPermitCreate = async (req, res) => {
  try {
    const issuerId = req.body.issuerObjectId;
    const user = await UserModel.findById(issuerId);

    // if (!user) {
    //   console.log(user);
    //   return res.status(404).send({
    //     success: false,
    //     message: "Issuer not found"
    //   });
    // }
    
    // Create a new work permit document based on the request body
    const newWorkPermit = new WorkPermitModel({
      permitName: req.body.permitName,
      issuerObjectId: new mongoose.Types.ObjectId(issuerId),
      fillPermissionID:new mongoose.Types.ObjectId(req.body.fillPermissionID),
      acceptPermissionIDs: req.body.acceptPermissionIDs.map(id => new mongoose.Types.ObjectId(id)),
      fillCompletedSubmission: req.body.fillCompletedSubmission || false,
      //p1IsuNme: user.username || 'Isura Perera',
      p1IsuNme:'Isura Perera', 
      //p1IsuDepNme: user.department || 'manufacturing', 
      p1IsuDepNme:'manufacturing', 
      p1TStart: req.body.p1TStart || '',
      p1TEnd: req.body.p1TEnd || '',
      p1ContractorNme: req.body.p1ContractorNme || '',
      p1ContractorComNme: req.body.p1ContractorComNme || '',
      p1JobLoca: req.body.p1JobLoca || '',
      p1JobDes: req.body.p1JobDes || '',
      DepOrSection: req.body.DepOrSection || '',
      p1CrosRef: req.body.p1CrosRef || '',
      p2HazardsIdentified: req.body.p2HazardsIdentified || [],
      p3DriveOrPanelInvolved: req.body.p3DriveOrPanelInvolved || '',
      p3motorIsolation: req.body.p3motorIsolation || [],
      p3motorCertifiedBy: req.body.p3motorCertifiedBy || '',
      p3MotorCrDate: req.body.p3MotorCrDate || null,
      p3motorCrTime: req.body.p3motorCrTime || '',
      p3ServicesIsolated: req.body.p3ServicesIsolated || '',
      p3HowServiceIsolated: req.body.p3HowServiceIsolated || [],
      p3serviceCertifiedBy: req.body.p3serviceCertifiedBy || '',
      p3serviceCrDate: req.body.p3serviceCrDate || null,
      p3serviceCrTime: req.body.p3serviceCrTime || '',
      p4EquipmentInvolved: req.body.p4EquipmentInvolved || '',
      p4ProcessIsolated: req.body.p4ProcessIsolated || [],
      p4ProcessCertifiedBy: req.body.p4ProcessCertifiedBy || '',
      p4ProcessCrDate: req.body.p4ProcessCrDate || null,
      p4ProcessCrTime: req.body.p4ProcessCrTime || '',
      p5PpeGeneral: req.body.p5PpeGeneral || [],
      p5PpeHotWork: req.body.p5PpeHotWork || [],
      p5PpeElectricalWork: req.body.p5PpeElectricalWork || [],
      p5PpeWorkAtHeight: req.body.p5PpeWorkAtHeight || [],
      p5PpeConfinedSpace: req.body.p5PpeConfinedSpace || [],
      p6PrecautionGeneral: req.body.p6PrecautionGeneral || [],
      p6PrecautionHotWork: req.body.p6PrecautionHotWork || [],
      p6PrecautionElectricalWork: req.body.p6PrecautionElectricalWork || [],
      p6PrecautionWorkAtHeight: req.body.p6PrecautionWorkAtHeight || [],
      p6PrecautionConfinedSpace: req.body.p6PrecautionConfinedSpace || [],
      p7WorkerDetails: req.body.p7WorkerDetails || [],
      p6AcceptedHodORsafetyInchargeID: req.body.p6AcceptedHodORsafetyInchargeID || null,
      p6AcceptedHodORsafetyInchargeNme: req.body.p6AcceptedHodORsafetyInchargeNme || '',
      p6AcceptHodORsafetyIncharge: req.body.p6AcceptHodORsafetyIncharge || false,
      p6AcceptHodORsafetyInchargeTime: req.body.p6AcceptHodORsafetyInchargeTime || '',
      p6AcceptAreaInchargeID: req.body.p6AcceptAreaInchargeID || null,
      p6AcceptAreaInchargeNme: req.body.p6AcceptAreaInchargeNme || '',
      p6AcceptAreaIncharge: req.body.p6AcceptAreaIncharge || false,
      p6AcceptAreaInchargeTime: req.body.p6AcceptAreaInchargeTime || '',
      p6PermitAcceptedByContractor: req.body.p6PermitAcceptedByContractor || false,
      p6PermitAcceptedByContractorTime: req.body.p6PermitAcceptedByContractorTime || '',
      p8CloseAcceptedSupervisor: req.body.p8CloseAcceptedSupervisor || false,
      p8WorkcloseSupervisorTime: req.body.p8WorkcloseSupervisorTime || '',
      p8PermitClosedResponsibleID: req.body.p8PermitClosedResponsibleID || null,
      p8permitclosedTime: req.body.p8permitclosedTime || ''
    });
 
    // Save the new work permit in the database
    await newWorkPermit.save();

    // Send success response
    res.status(201).send({
      message: "Work Permit created successfully",
      success: true,
      workPermit: newWorkPermit
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Work Permit creation failed: ${error.message}`
    });
  }
};

module.exports = { WorkPermitCreate };

