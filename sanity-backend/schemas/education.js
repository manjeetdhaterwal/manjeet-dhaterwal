export default {
    name: 'education',
    type: 'document',
    title: 'Education',
    fields: [
        {
            title: 'Passing Year',
            name: 'year',
            type: 'string'
        },
        {
            title: 'Institute Name',
            name: 'name',
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
            name: 'desc',
            type: 'text',
            title: 'Description',
            options: {
                isHighlighted: true // <-- make this field easily accessible
            }
        },
        {
            title: 'Marks',
            name: 'marks',
            type: 'string'
        }
        
    ]
}