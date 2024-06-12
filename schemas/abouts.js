export default {
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields: [
    {
      name: 's_no',
      title: 'S_no',
      type: 'number',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
