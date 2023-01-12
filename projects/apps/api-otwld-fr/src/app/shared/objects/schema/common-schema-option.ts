export const commonSchemaOption = {
  _id: true,
  versionKey: false,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  useCreateIndex: true,
};
