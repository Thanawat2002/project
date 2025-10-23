// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'vue/component-tags-order': [
        'warn',
        {
          order: ['script', 'template', 'style']
        }
      ],
      'vue/multi-word-component-names': ['off'],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 1,
          multiline: 1
        }
      ],
      'vue/first-attribute-linebreak': [
        'error',
        {
          singleline: 'ignore',
          multiline: 'below'
        }
      ],
      'vue/html-indent': [
        'error',
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: []
        }
      ],
      'comma-dangle': ['error', 'never'],
      semi: ['error', 'never'],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  }
)
