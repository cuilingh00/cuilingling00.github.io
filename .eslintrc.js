// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-blocks': 0,
    'no-trailing-spaces': 0,
    'semi': 0,
    'comma-dangle': 0,
    'eol-last': 0,
    'space-before-blocks': 0,
    'key-spacing':0,
    'arrow-spacing':0,
    'arrow-body-style':0,
    "no-nested-ternary": "error",
    'object-curly-spacing': ['error', 'never'],
    'array-callback-return':0,
    "quotes": [0, "single"],
    "array-bracket-spacing": ["error", "never"],
    "arrow-parens": ["warn", "as-needed", { "requireForBlockBody": true }],
    'max-len': [
      'error',
      {
        'code': 300,
      }
    ],
    // 'no-console': 'warn',
    // "no-restricted-syntax": [
    //   "error",
    //   {
    //     "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
    //     "message": "Unexpected property on console object was called"
    //   }
    // ]
  }
}
