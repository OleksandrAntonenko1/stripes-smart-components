import React from 'react';
import { describe, beforeEach, it } from '@bigtest/mocha';
import { expect } from 'chai';
import { Field } from 'redux-form';
import { Row, Col } from '../../../../../../stripes-components/lib/LayoutGrid/index';

import TestForm from '../../../../../test/bigtest/TestForm';
import PasswordStrength from '../../../PasswordStrength';
import PasswordStrengthComponent from '../interactors/interactor-test';
import { mountWithContext } from '../../../../../test/bigtest/helpers';

import translation from '../../../../../translations/stripes-smart-components/en';

describe('password strength', () => {
  beforeEach(async () => {
    await mountWithContext(
      <Row>
        <Col xs={12}>
          <div data-test-password-strength>
            <TestForm>
              <Field
                component={PasswordStrength}
                type="password"
                id="current-password"
                name="currentPassword"
                label="test"
                autoFocus
              />
            </TestForm>
          </div>
        </Col>
      </Row>
    );
  });

  it('component should be presented', () => {
    expect(PasswordStrengthComponent.isPresent).to.be.true;
  });

  it('textInput should be presented', () => {
    expect(PasswordStrengthComponent.textInput.isPresent).to.be.true;
  });

  it('password strength meter should not be presented', () => {
    expect(PasswordStrengthComponent.passwordStrength.isPresent).to.be.false;
  });

  describe('very week password', () => {
    beforeEach(async () => {
      await PasswordStrengthComponent.textInput.focusInput();
      await PasswordStrengthComponent.textInput.fillInput('1');
      await PasswordStrengthComponent.textInput.blurInput();
    });

    it('password strength meter should be presented through password insertion', () => {
      expect(PasswordStrengthComponent.passwordStrength.isPresent).to.be.true;
    });

    it('password strength meter should have proper text', () => {
      expect(PasswordStrengthComponent.passwordStrength.text.text).to.equal(translation['passwordStrength.veryWeak']);
    });

    it('password strength meter should have label', () => {
      expect(PasswordStrengthComponent.passwordStrength.label.isPresent).to.be.true;
    });

    it('password strength meter should have proper label text', () => {
      expect(PasswordStrengthComponent.passwordStrength.label.text).to.be.equal(translation['passwordStrength.label']);
    });

    it('password strength meter should have proper indicator', () => {
      expect(PasswordStrengthComponent.passwordStrength.veryWeakIndicator.isPresent).to.be.true;
    });
  });

  describe('week password', () => {
    beforeEach(async () => {
      await PasswordStrengthComponent.textInput.focusInput();
      await PasswordStrengthComponent.textInput.fillInput('test1test');
      await PasswordStrengthComponent.textInput.blurInput();
    });

    it('password strength meter should be presented through password insertion', () => {
      expect(PasswordStrengthComponent.passwordStrength.isPresent).to.be.true;
    });

    it('password strength meter should have proper text', () => {
      expect(PasswordStrengthComponent.passwordStrength.text.text).to.equal(translation['passwordStrength.weak']);
    });

    it('password strength meter should have label', () => {
      expect(PasswordStrengthComponent.passwordStrength.label.isPresent).to.be.true;
    });

    it('password strength meter should have proper label text', () => {
      expect(PasswordStrengthComponent.passwordStrength.label.text).to.be.equal(translation['passwordStrength.label']);
    });

    it('password strength meter should have proper indicator', () => {
      expect(PasswordStrengthComponent.passwordStrength.weakIndicator.isPresent).to.be.true;
    });
  });

  describe('reasonable password', () => {
    beforeEach(async () => {
      await PasswordStrengthComponent.textInput.focusInput();
      await PasswordStrengthComponent.textInput.fillInput('test1test1');
      await PasswordStrengthComponent.textInput.blurInput();
    });

    it('password strength meter should be presented through password insertion', () => {
      expect(PasswordStrengthComponent.passwordStrength.isPresent).to.be.true;
    });

    it('password strength meter should have proper text', () => {
      expect(PasswordStrengthComponent.passwordStrength.text.text).to.equal(translation['passwordStrength.reasonable']);
    });

    it('password strength meter should have label', () => {
      expect(PasswordStrengthComponent.passwordStrength.label.isPresent).to.be.true;
    });

    it('password strength meter should have proper label text', () => {
      expect(PasswordStrengthComponent.passwordStrength.label.text).to.be.equal(translation['passwordStrength.label']);
    });

    it('password strength meter should have proper indicator', () => {
      expect(PasswordStrengthComponent.passwordStrength.reasonableIndicator.isPresent).to.be.true;
    });
  });

  describe('strong password', () => {
    beforeEach(async () => {
      await PasswordStrengthComponent.textInput.focusInput();
      await PasswordStrengthComponent.textInput.fillInput('test1test1test');
      await PasswordStrengthComponent.textInput.blurInput();
    });

    it('password strength meter should be presented through password insertion', () => {
      expect(PasswordStrengthComponent.passwordStrength.isPresent).to.be.true;
    });

    it('password strength meter should have proper text', () => {
      expect(PasswordStrengthComponent.passwordStrength.text.text).to.equal(translation['passwordStrength.strong']);
    });

    it('password strength meter should have label', () => {
      expect(PasswordStrengthComponent.passwordStrength.label.isPresent).to.be.true;
    });

    it('password strength meter should have proper label text', () => {
      expect(PasswordStrengthComponent.passwordStrength.label.text).to.be.equal(translation['passwordStrength.label']);
    });

    it('password strength meter should have proper indicator', () => {
      expect(PasswordStrengthComponent.passwordStrength.strongIndicator.isPresent).to.be.true;
    });
  });

  describe('very strong password', () => {
    beforeEach(async () => {
      await PasswordStrengthComponent.textInput.focusInput();
      await PasswordStrengthComponent.textInput.fillInput('test1test1test@test1test1test');
      await PasswordStrengthComponent.textInput.blurInput();
    });

    it('password strength meter should be presented through password insertion', () => {
      expect(PasswordStrengthComponent.passwordStrength.isPresent).to.be.true;
    });

    it('password strength meter should have proper text', () => {
      expect(PasswordStrengthComponent.passwordStrength.text.text).to.equal(translation['passwordStrength.veryStrong']);
    });

    it('password strength meter should have label', () => {
      expect(PasswordStrengthComponent.passwordStrength.label.isPresent).to.be.true;
    });

    it('password strength meter should have proper label text', () => {
      expect(PasswordStrengthComponent.passwordStrength.label.text).to.be.equal(translation['passwordStrength.label']);
    });

    it('password strength meter should have proper indicator', () => {
      expect(PasswordStrengthComponent.passwordStrength.veryStrongIndicator.isPresent).to.be.true;
    });
  });

  describe('password deletion', () => {
    beforeEach(async () => {
      await PasswordStrengthComponent.textInput.focusInput();
      await PasswordStrengthComponent.textInput.fillInput('test1test1test@test1test1test');
      await PasswordStrengthComponent.textInput.fillInput('');
      await PasswordStrengthComponent.textInput.blurInput();
    });

    it('password strength meter should not be presented', () => {
      expect(PasswordStrengthComponent.passwordStrength.isPresent).to.be.false;
    });
  });
});

describe('password strength hidden', () => {
  beforeEach(async () => {
    await mountWithContext(
      <Row>
        <Col xs={12}>
          <div data-test-password-strength>
            <TestForm>
              <Field
                component={PasswordStrength}
                type="password"
                id="current-password"
                name="currentPassword"
                label="test"
                autoFocus
                inputColProps={{ xs: 6 }}
                passwordStrengthHidden
              />
            </TestForm>
          </div>
        </Col>
      </Row>
    );
  });

  it('component should be presented', () => {
    expect(PasswordStrengthComponent.isPresent).to.be.true;
  });

  it('textInput should be presented', () => {
    expect(PasswordStrengthComponent.textInput.isPresent).to.be.true;
  });

  it('password strength meter should not be presented', () => {
    expect(PasswordStrengthComponent.passwordStrength.isPresent).to.be.false;
  });

  describe('password insertion', () => {
    beforeEach(async () => {
      await PasswordStrengthComponent.textInput.focusInput();
      await PasswordStrengthComponent.textInput.fillInput('test');
      await PasswordStrengthComponent.textInput.blurInput();
    });

    it('textInput should be presented', () => {
      expect(PasswordStrengthComponent.textInput.isPresent).to.be.true;
    });

    it('password strength meter should not be presented through password insertion', () => {
      expect(PasswordStrengthComponent.passwordStrength.isPresent).to.be.false;
    });
  });

  describe('password deletion', () => {
    beforeEach(async () => {
      await PasswordStrengthComponent.textInput.focusInput();
      await PasswordStrengthComponent.textInput.fillInput('test1test1test@test1test1test');
      await PasswordStrengthComponent.textInput.fillInput('');
      await PasswordStrengthComponent.textInput.blurInput();
    });

    it('textInput should be presented', () => {
      expect(PasswordStrengthComponent.textInput.isPresent).to.be.true;
    });

    it('password strength meter should not be presented', () => {
      expect(PasswordStrengthComponent.passwordStrength.isPresent).to.be.false;
    });
  });
});
