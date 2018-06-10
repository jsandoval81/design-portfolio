import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('portfolio-list', 'Integration | Component | portfolio list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{portfolio-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#portfolio-list}}
      template block text
    {{/portfolio-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
