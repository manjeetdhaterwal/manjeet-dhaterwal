export default {
    name: 'social',
    type: 'document',
    title: 'Social',
    fields: [
        {
            title: 'Social Site Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Site Link',
            name: 'href',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        }
    ]
}