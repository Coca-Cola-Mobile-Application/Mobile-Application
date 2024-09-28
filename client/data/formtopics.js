export const topicDetails =[
    {
        number:'1',
        title:'VALIDITY'
    },
    {
        number:'2',
        title:'ISSUING DEPT'
    },
    {
        number:'3',
        title:'ISSUED TO'
    },
    {
        number:'4',
        title:'CROSS REF'
    },
    {
        number:'5',
        title:'JOB LOCATION'
    },
    {
        number:'6',
        title:'JOB DESCRIPTION'
    },
    {
        number:'7',
        title:'HAZARDS IDENTIFIED'
    },
    {
        number:'8',
        title:"SPECIFY HAZARDS & CONTROL MEASURES"
    },
    {
        number:'9',
        title:"ISOLATION REQUIRED"
    },
    {
        number:'10',
        title:"PPE TO BE USED  (TICK BELLOW AND RELEVANT PICTURE)"
    },
    {
        number:'11',
        title:"PRECAUTIONS CHECKLIST"
    },
    {
        number:'16',
        title:"NAMES OF EMPLOYEES ON THE JOB"
    },
    {
        number:'17',
        title:"Create New Work Permit"
    },
    {
        number:'18',
        title:"Select Permit Type"
    },
    {
        number:'19',
        title:"New Permits To Fill"
    },
    {
        number:'20',
        title:"Permits To Accept"
    },
    {
        number:'21',
        title:"Permit Authorization"
    },

]
 
export const sections = [
    {
        topic: topicDetails[0],
        data: [
            {
                key: 'p1IssueDate',
                inputTitle: 'Date',
                placeHolder: 'select date',
                mode: 'date',
                pickerDisplay: true,
                editable: false,
            },
            {
                key: 'p1TStart',
                inputTitle: 'Time Start',
                placeHolder: 'select start time',
                mode: 'time',
                pickerDisplay: true,
                editable: false,
            },
            {
                key: 'p1TEnd',
                inputTitle: 'Time End',
                placeHolder: 'select end time',
                mode: 'time',
                pickerDisplay: true,
                editable: false,
            }
        ]
    },
    {
        topic: topicDetails[1],
        data: [
            {
                key: 'p1IsuNme',
                inputTitle: 'Name',
                placeHolder: 'enter name',
                pickerDisplay: false,
                editable: true,
            },
            {
                key: 'p1IsuDepNme',
                inputTitle: 'Dept',
                placeHolder: 'enter department name',
                pickerDisplay: false,
                editable: true,
            }
        ]
    },
    {
        topic: topicDetails[2],
        data: [
            {
                key: 'p1ContractorNme',
                inputTitle: 'Name',
                placeHolder: 'enter name',
                pickerDisplay: false,
                editable: true,
            },
            {
                key: 'p1ContractorComNme',
                inputTitle: 'Dept/Co',
                placeHolder: 'enter department name',
                pickerDisplay: false,
                editable: true,
            }
        ]
    },
    {
        topic: topicDetails[3],
        data: [
            {
                key: 'p1CrosRef',
                placeHolder: 'enter name',
                pickerDisplay: false,
                editable: true,
            }
        ]
    },
    {
        topic: topicDetails[4],
        data: [
            {
                key: 'p1JobLoca',
                placeHolder: 'enter location',
                pickerDisplay: false,
                editable: true,
            }
        ]
    },
    {
        topic: topicDetails[5],
        data: [
            {
                key: 'p1JobDes',
                placeHolder: 'enter description',
                pickerDisplay: false,
                editable: true,
            }
        ]
    }
];