FROM cypress/base:12.6.0 as base
# Set workding dir to what's in the existing image
WORKDIR /

# --------------------------------------------------

From base as cypress
# Install Cypress
RUN npm install --save-dev cypress

# --------------------------------------------------

From cypress as copy_cypress_files
# Set path
ENV PATH=$PATH:/node_modules/cypress/bin
# Set workdir
WORKDIR /mnt/cypress

# --------------------------------------------------

# Run the command...
CMD ["cypress", "run", "-s", "integration/flask_spec.js"]
