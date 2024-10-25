export const isolationData =[
    { 
        id:"1",
        topic:"Electrical Isolation Motor Isolation",
        insideOne:"Drive/Panel Involved",
        insideOneKey:"p3DriveOrPanelInvolved",
        insideTwo:"How Isolated",
        AddTickes:[
            {
                key:"1",
                attribute: "Fuse removed",
                valueID:"p3motorIsolation"
            },
            {
                key:"2",
                attribute: "Isolator put & locked",
                valueID:"p3motorIsolation"
            },
            {
                key:"3",
                attribute:"Tested Non-operative",
                valueID:"p3motorIsolation"
            },
            {
                key:"4",
                attribute: "Tagout to be Done",
                valueID:"p3motorIsolation"
            }
        ],
        certify:"Certified By",
        certifyByKey:"p3motorCertifiedBy",
        timeStampOne:"Date",
        timeStampOneKey:"p3MotorCrDate",
        timeStampTwo:"Time",
        timeStampTwoKey:"p3motorCrTime"
    },
    {
        id:"2",
        topic:"Service Isolation",
        insideOne:"Service Isolated(Steam/Air or Other)",
        insideOneKey:"p3ServicesIsolated",
        insideTwo:"How Isolated{specify}",
        AddTickes:[
            {
                key:"1",
                attribute: "Depressurized",
                valueID:"p3HowServiceIsolated"
            },
            {
                key:"2",
                attribute: "Blind to be Provide in Pipes",
                valueID:"p3HowServiceIsolated"
            },
            {
                key:"3",
                attribute:"Lock and Tag out of Key valves",
                valueID:"p3HowServiceIsolated"
            }
        ],
        certify:"Certified By",
        certifyByKey:"p3serviceCertifiedBy",
        timeStampOne:"Date",
        timeStampOneKey:"p3serviceCrDate",
        timeStampTwo:"Time",
        timeStampTwoKey:"p3serviceCrTime"
    },
    {
        id:"3",
        topic:"Process Isolation",
        insideOne:"Equipment involved",
        insideOneKey:"p4EquipmentInvolved",
        insideTwo:"How Isolated",
        AddTickes:[
            {
                key:"1",
                attribute: "Valve closed & Tagged",
                valueID:"p4ProcessIsolated"
            },
            {
                key:"2",
                attribute:"Line Blanked",
                valueID:"p4ProcessIsolated"
            },
            {
                key:"3",
                attribute:"Line Disconnected",
                valueID:"p4ProcessIsolated"
            },
            {
                key:"4",
                attribute:"Material Drained",
                valueID:"p4ProcessIsolated"
            },
            {
                key:"5",
                attribute:"Flushed and Blind Provided",
                valueID:"p4ProcessIsolated"
            }
        ],
        certify:"Certified By",
        certifyByKey:"p4ProcessCertifiedBy",
        timeStampOne:"Date",
        timeStampOneKey:"p4ProcessCrDate",
        timeStampTwo:"Time",
        timeStampTwoKey:"p4ProcessCrTime"
    }
]

export const tempData ={
    p3DriveOrPanelInvolved:"",
    p3motorIsolation:[],
    p3motorCertifiedBy:"",
    p3MotorCrDate:new Date(),
    p3motorCrTime:new Date(),
    p3ServicesIsolated:"",
    p3HowServiceIsolated:[],
    p3serviceCertifiedBy:"",
    p3serviceCrDate:new Date(),
    p3serviceCrTime:new Date(),
    p4EquipmentInvolved:"",
    p4ProcessIsolated:[],
    p4ProcessCertifiedBy:"",
    p4ProcessCrDate:new Date(),
    p4ProcessCrTime:new Date(),
}