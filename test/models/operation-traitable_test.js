const { expect } = require('chai');
const js = { summary: 't', description: 'test', operationId: 'test', tags: [{name: 'tag1'}], externalDocs: { url: 'somewhere' }, bindings: { amqp: { test: true } }, 'x-test': 'testing' };

const OperationTraitable = require('../../lib/models/operation-traitable');

const { assertMixinDescriptionInheritance } = require('../mixins/description_test');
const { assertMixinExternalDocsInheritance } = require('../mixins/external-docs_test');
const { assertMixinTagsInheritance } = require('../mixins/tags_test');
const { assertMixinBindingsInheritance } = require('../mixins/bindings_test');
const { assertMixinSpecificationExtensionsInheritance } = require('../mixins/specification-extensions_test');

describe('OperationTraitable', function() {   
  describe('#summary()', function() {
    it('should return a string', function() {
      const d = new OperationTraitable(js);
      expect(d.summary()).to.be.equal(js.summary);
    });
  });
   
  describe('#id()', function() {
    it('should return a string', function() {
      const d = new OperationTraitable(js);
      expect(d.id()).to.be.equal(js.operationId);
    });
  });
  
  describe('#messages()', function() {
    it('should NOT have a messages method', function() {
      const d = new OperationTraitable(js);
      expect(d.messages).to.be.equal(undefined);
    });
  });
  
  describe('#message()', function() {
    it('should NOT have a message method', function() {
      const d = new OperationTraitable(js);
      expect(d.message).to.be.equal(undefined);
    });
  });

  describe('#mixins', function() {
    it('model should inherit from mixins', function() {
      assertMixinDescriptionInheritance(OperationTraitable);
      assertMixinExternalDocsInheritance(OperationTraitable);
      assertMixinTagsInheritance(OperationTraitable);
      assertMixinBindingsInheritance(OperationTraitable);
      assertMixinSpecificationExtensionsInheritance(OperationTraitable);
    });
  });
});
