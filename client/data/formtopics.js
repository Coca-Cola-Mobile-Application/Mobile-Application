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
    }
]

export const sections = [
    {
        topic: topicDetails[0],
        data: [
            {
                key: '1',
                inputTitle: 'Date',
                placeHolder: 'select date',
                mode: 'date',
                pickerDisplay: true,
                editable: false,
            },
            {
                key: '2',
                inputTitle: 'Time Start',
                placeHolder: 'select start time',
                mode: 'time',
                pickerDisplay: true,
                editable: false,
            },
            {
                key: '3',
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
                key: '3',
                inputTitle: 'Name',
                placeHolder: 'enter name',
                pickerDisplay: false,
                editable: true,
            },
            {
                key: '4',
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
                key: '5',
                inputTitle: 'Name',
                placeHolder: 'enter name',
                pickerDisplay: false,
                editable: true,
            },
            {
                key: '6',
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
                key: '7',
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
                key: '8',
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
                key: '9',
                placeHolder: 'enter description',
                pickerDisplay: false,
                editable: true,
            }
        ]
    }
];