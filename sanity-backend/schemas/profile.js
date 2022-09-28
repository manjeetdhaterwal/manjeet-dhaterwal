export default {
    name: 'profile',
    type: 'document',
    title: 'Profile',
    fields: [
        {
            title: 'Profile Name',
            name: 'name',
            type: 'string'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Profile Image',
            options: {
                isHighlighted: true // <-- make this field easily accessible
            }
        }
    ]
}