class SmUiUserMenu {
  beforeRegister() {
    this.is = 'sm-ui-user-menu';

    this.properties = {

      /**
       * Whether menu open or not
       * @type {Boolean}
       */
      active: {
        type: Boolean,
        value: false
      },

      /**
       * Position the menu should open from
       * (top | bottom) | (left | right)
       * @type {String}
       */
      callout: {
        type: String,
        value: 'top left',
        reflectToAttribute: true
      },

      /**
       * User email
       * @type {String}
       */
      user: {
        type: String,
        value: ''
      },

      openIcon: {
        type: String,
        value: 'simpla:arrow-down'
      },

      closeIcon: {
        type: String,
        value: 'simpla:arrow-up'
      },

      /**
       * Icon of the toggle button
       * @type {String}
       */
      _toggleIcon: {
        type: String,
        computed: '_computeToggleIcon(active, openIcon, closeIcon)'
      },

      /**
       * Whether menu should provide tap-to-open functionality
       * Disable if active will be triggered another way
       * @type {Boolean}
       */
      noTap: Boolean

    };
  }

  /**
   * Utility method to toggle menu
   * @return {undefined}
   */
  toggle() {
    this.active = !this.active
  }

  _handleTap() {
    if (!this.noTap) {
      this.toggle();
    }
  }

  /**
   * Value of _toggleIcon determined by active
   * @param  {Boolean} active Current value of the active property
   * @param  {String} openIcon Current value of the openIcon property
   * @param  {String} closeIcon Current value of the closeIcon property
   * @return {undefined}
   */
  _computeToggleIcon(active, openIcon, closeIcon) {
    return active ? closeIcon : openIcon;
  }
}

Polymer(SmUiUserMenu);