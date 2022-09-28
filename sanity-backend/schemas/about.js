export default {
    name: 'about',
    type: 'document',
    title: 'About',
    fields: [
        {
            title: 'Profile Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Job title',
            name: 'job',
            type: 'string'
        },
        {
            name: 'desc',
            type: 'text',
            title: 'Profile Description',
            options: {
                isHighlighted: true // <-- make this field easily accessible
            }
        }
    ]
}