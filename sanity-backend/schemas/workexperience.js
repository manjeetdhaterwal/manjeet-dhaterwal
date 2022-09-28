export default {
    name: 'workexperience',
    type: 'document',
    title: 'Work Experience',
    fields: [
        {
            title: 'Job title',
            name: 'jobrole',
            type: 'string'
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Company Logo',
            options: {
                isHighlighted: true // <-- make this field easily accessible
            }
        },
        {
            name: 'jobdesc',
            type: 'text',
            title: 'Job Description',
            options: {
                isHighlighted: true // <-- make this field easily accessible
            }
        },
        {
            title: 'Starting Date',
            name: 'stdate',
            type: 'string'
        },
        {
            title: 'Ending Date',
            name: 'enddate',
            type: 'string'
        }
        
    ]
}