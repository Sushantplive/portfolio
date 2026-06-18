import React from "react";
import type { EnterpriseProof, MockupVariant } from "./projectsData";
import "./enterpriseProof.css";

interface EnterpriseProofPanelProps {
  proof: EnterpriseProof;
  variant?: "preview" | "details";
}

const MockupFrame: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="enterprise-proof__mock" aria-hidden="true">
    <div className="enterprise-proof__mock-bar">
      <div className="enterprise-proof__mock-dots">
        <span />
        <span />
        <span />
      </div>
      <span className="enterprise-proof__mock-label">{label} · Redacted</span>
    </div>
    <div className="enterprise-proof__mock-body">{children}</div>
  </div>
);

const AnalyticsDashboardMock: React.FC = () => (
  <MockupFrame label="Analytics Dashboard">
    <div className="enterprise-proof__filters">
      <span className="enterprise-proof__filter enterprise-proof__filter--active">MTD</span>
      <span className="enterprise-proof__filter">Daily</span>
      <span className="enterprise-proof__filter">Region</span>
      <span className="enterprise-proof__filter">Industry</span>
    </div>
    <div className="enterprise-proof__kpis">
      {["Portfolio Balance", "Transactions", "Billed Revenue"].map((label) => (
        <div key={label} className="enterprise-proof__kpi">
          <span className="enterprise-proof__kpi-label">{label}</span>
          <span className="enterprise-proof__kpi-value" />
        </div>
      ))}
    </div>
    <div className="enterprise-proof__chart-row">
      <div className="enterprise-proof__chart">
        <span className="enterprise-proof__kpi-label">Trend Analysis</span>
        <div className="enterprise-proof__chart-line" />
      </div>
      <div className="enterprise-proof__chart">
        <span className="enterprise-proof__kpi-label">Segment Mix</span>
        <div className="enterprise-proof__chart-bars">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
    <div className="enterprise-proof__table" style={{ marginTop: "0.75rem" }}>
      <div className="enterprise-proof__table-row enterprise-proof__table-row--head">
        <span className="enterprise-proof__table-cell" />
        <span className="enterprise-proof__table-cell" />
        <span className="enterprise-proof__table-cell" />
        <span className="enterprise-proof__table-cell" />
      </div>
      {[1, 2, 3].map((row) => (
        <div key={row} className="enterprise-proof__table-row">
          <span className="enterprise-proof__table-cell" />
          <span className="enterprise-proof__table-cell" />
          <span className="enterprise-proof__table-cell" />
          <span className="enterprise-proof__table-cell" />
        </div>
      ))}
    </div>
  </MockupFrame>
);

const TransactionWorkflowMock: React.FC = () => (
  <MockupFrame label="Transaction Workflow">
    <div className="enterprise-proof__workflow">
      {[
        "Capture transaction details",
        "Validate business rules",
        "Submit for processing",
      ].map((title, index) => (
        <div key={title} className="enterprise-proof__step">
          <span className="enterprise-proof__step-index">{index + 1}</span>
          <div className="enterprise-proof__step-card">
            <p className="enterprise-proof__step-title">{title}</p>
            <span className="enterprise-proof__field-value enterprise-proof__field-value--long" />
          </div>
        </div>
      ))}
    </div>
    <div className="enterprise-proof__form-grid" style={{ marginTop: "0.75rem" }}>
      {["Counterparty", "Amount", "Reference ID"].map((label) => (
        <div key={label} className="enterprise-proof__field">
          <span className="enterprise-proof__field-label">{label}</span>
          <span
            className={`enterprise-proof__field-value ${
              label === "Reference ID"
                ? "enterprise-proof__field-value--short"
                : "enterprise-proof__field-value--medium"
            }`}
          />
        </div>
      ))}
    </div>
    <div className="enterprise-proof__status-row">
      <span className="enterprise-proof__status enterprise-proof__status--ok">Validation passed</span>
      <span className="enterprise-proof__status enterprise-proof__status--pending">
        Awaiting approval
      </span>
    </div>
  </MockupFrame>
);

const TradeWorkflowMock: React.FC = () => (
  <MockupFrame label="Trade Finance Module">
    <div className="enterprise-proof__workflow">
      {[
        "Initiate guarantee request",
        "Compliance checks",
        "Release to operations",
      ].map((title, index) => (
        <div key={title} className="enterprise-proof__step">
          <span className="enterprise-proof__step-index">{index + 1}</span>
          <div className="enterprise-proof__step-card">
            <p className="enterprise-proof__step-title">{title}</p>
            <span className="enterprise-proof__field-value enterprise-proof__field-value--medium" />
          </div>
        </div>
      ))}
    </div>
    <div className="enterprise-proof__kpis" style={{ marginTop: "0.75rem" }}>
      {["Open Guarantees", "Exceptions", "Release Queue"].map((label) => (
        <div key={label} className="enterprise-proof__kpi">
          <span className="enterprise-proof__kpi-label">{label}</span>
          <span className="enterprise-proof__kpi-value" />
        </div>
      ))}
    </div>
  </MockupFrame>
);

const TelemetryDashboardMock: React.FC = () => (
  <MockupFrame label="Infrastructure Monitoring">
    <div className="enterprise-proof__kpis">
      {["System Health", "Predicted Issues", "Telemetry Load"].map((label) => (
        <div key={label} className="enterprise-proof__kpi">
          <span className="enterprise-proof__kpi-label">{label}</span>
          <span className="enterprise-proof__kpi-value" />
        </div>
      ))}
    </div>
    <div className="enterprise-proof__chart-row" style={{ marginTop: "0.75rem" }}>
      <div className="enterprise-proof__chart">
        <span className="enterprise-proof__kpi-label">Performance Trend</span>
        <div className="enterprise-proof__chart-line" />
      </div>
      <div className="enterprise-proof__chart">
        <span className="enterprise-proof__kpi-label">Alert Volume</span>
        <div className="enterprise-proof__chart-bars">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  </MockupFrame>
);

const mockupByVariant: Record<MockupVariant, React.FC> = {
  "analytics-dashboard": AnalyticsDashboardMock,
  "transaction-workflow": TransactionWorkflowMock,
  "trade-workflow": TradeWorkflowMock,
  "telemetry-dashboard": TelemetryDashboardMock,
};

const EnterpriseProofPanel: React.FC<EnterpriseProofPanelProps> = ({
  proof,
  variant = "preview",
}) => {
  const Mockup = mockupByVariant[proof.mockupVariant];

  if (variant === "preview") {
    return (
      <section
        className="enterprise-proof enterprise-proof--preview"
        aria-label="Enterprise delivery preview"
      >
        <div className="enterprise-proof__panel enterprise-proof__panel--mockup-only">
          <h5 className="enterprise-proof__panel-title">Redacted UI Pattern</h5>
          <Mockup />
        </div>
        <div className="enterprise-proof__signals enterprise-proof__signals--inline">
          {proof.deliverySignals.map((signal) => (
            <span key={signal} className="enterprise-proof__signal">
              {signal}
            </span>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="enterprise-proof enterprise-proof--details" aria-label="Enterprise delivery proof">
      <div className="enterprise-proof__header">
        <h4 className="enterprise-proof__title">Enterprise Delivery Proof</h4>
        <p className="enterprise-proof__disclaimer">{proof.ndaDisclaimer}</p>
      </div>

      <div className="enterprise-proof__grid enterprise-proof__grid--details">
        <div className="enterprise-proof__panel">
          <h5 className="enterprise-proof__panel-title">Frontend Architecture</h5>
          <div className="enterprise-proof__arch-flow enterprise-proof__arch-flow--compact">
            {proof.architecture.map((layer) => (
              <div key={layer.title} className="enterprise-proof__arch-layer">
                <p className="enterprise-proof__arch-layer-title">{layer.title}</p>
                <p className="enterprise-proof__arch-layer-detail">{layer.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="enterprise-proof__panel">
          <h5 className="enterprise-proof__panel-title">Performance Signals</h5>
          <div className="enterprise-proof__metrics enterprise-proof__metrics--compact">
            {proof.performance.map((metric) => (
              <div key={metric.label} className="enterprise-proof__metric">
                <p className="enterprise-proof__metric-label">{metric.label}</p>
                <div className="enterprise-proof__metric-values">
                  <span className="enterprise-proof__metric-before">{metric.before}</span>
                  <span className="enterprise-proof__metric-arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="enterprise-proof__metric-after">{metric.after}</span>
                </div>
                <p className="enterprise-proof__metric-note">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseProofPanel;
