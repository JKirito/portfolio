export default {
  name: 'skills',
  type: 'document',
  title: 'Skills',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'imageUrl',
      type: 'image',
      title: 'ImageUrl',
      options: {
        hotspot: true,
      },
    },
  ],
};
