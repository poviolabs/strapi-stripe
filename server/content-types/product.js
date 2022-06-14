module.exports = {
  info: {
    tableName: "StrapiStripeProduct",
    singularName: "strapi-stripe-product", // kebab-case mandatory
    pluralName: "strapi-stripe-products", // kebab-case mandatory
    displayName: "Product",
    description: "Stripe Products",
    kind: "collectionType",
  },
  options: {
    draftAndPublish: "false",
  },
  pluginOptions: {
    "content-manager": {
      visible: true,
    },
    "content-type-builder": {
      visible: true,
    },
  },
  attributes: {
    title: {
      type: "string",
      min: 1,
      required: true,
      configurable: false,
    },
    slug: {
      type: "uid",
      targetField: "title",
      unique: true,
      required: true,
      configurable: false,
    },
    description: {
      type: "string",
      min: 1,
      required: true,
      configurable: false,
    },
    price: {
      type: "decimal",
      required: true,
      configurable: false,
    },
    currency: {
      type: "string",
      min: 1,
      required: true,
      configurable: false,
    },
    productImage: {
      type: "string",
      min: 3,
      required: true,
      configurable: false,
    },
    productType: {
      type: "enumeration",
      enum: [
        "payment",
        "subscription"
      ],
      default: "payment",
      required: true
    },
    stripeProductId: {
      type: "string",
      min: 3,
      required: true,
      configurable: false,
    },
    stripePriceId: {
      type: "string",
      min: 3,
      required: true,
      configurable: false,
    },
    stripePayment: {
      type: "relation",
      relation: "oneToMany",
      target: "plugin::strapi-stripe.strapi-stripe-payment",
      mappedBy: "stripeProduct",
      configurable: false,
    },
  },
};
