import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  BookOpen, 
  ChevronRight, 
  FileText, 
  Code, 
  Database, 
  Terminal, 
  Cpu, 
  ShieldAlert, 
  Layers, 
  Sparkles,
  Download,
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon: any;
  content: React.ReactNode;
}

interface TechnicalDocsProps {
  onBack: () => void;
}

export default function TechnicalDocs({ onBack }: TechnicalDocsProps) {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string, label: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const sections: Section[] = useMemo(() => [
    {
      id: "overview",
      title: "1. System Overview & Core Workflow",
      icon: Layers,
      content: (
        <div id="doc-section-overview" className="space-y-6">
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">System Overview & Core Workflow</h1>
            <p className="text-slate-500 mt-2 text-base">High-level service operational cycle and data flow orchestration.</p>
          </div>

          <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-sm border border-slate-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-xl text-yellow-500 shrink-0">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2 text-lg">SafeChild Design Philosophy</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  SafeChild is a dual-phase, community-driven child safety ecosystem. It bridges physical hardware IoT tracking with a real-time, crowd-sourced mobile network. The core design principle ensures a child's location is private by default and only surfaces when the device enters an alert state.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 id="doc-heading-dataflow" className="text-xl font-bold text-slate-950 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">1.1</span>
              Global System Data Flow
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              The linear data lifecycle moves from low-level hardware packets up to encrypted application states:
            </p>

            <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm bg-white">
              <table className="w-full border-collapse text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 font-semibold">
                  <tr>
                    <th className="px-4 py-3 w-12 text-center">#</th>
                    <th className="px-4 py-3">Component</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { id: 1, c: "Wearable Device (SIM808)", a: "Transmits GSM/GPRS uplink with GPS coordinates and sensor readings." },
                    { id: 2, c: "Cellular Tower Network", a: "Routes signal to the public internet." },
                    { id: 3, c: "Supabase Edge Function", a: "Receives HTTPS POST at /v1/telemetry and evaluates device state." },
                    { id: 4, c: "Supabase Realtime DB", a: "Persists telemetry log and updates the device status record." },
                    { id: 5, c: "Cross-Reference Engine", a: "Async DB trigger fires on new incident_reports to run the matching algorithm." },
                    { id: 6, c: "Firebase Cloud Messaging", a: "Broadcasts push notification only on SOS or low battery state." },
                    { id: 7, c: "React Native App", a: "Receives push notification, updates AlertsScreen and HomeScreen." },
                    { id: 8, c: "Parent / Community Network", a: "Views alert details, location, and algorithmic match results." },
                  ].map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/55 transition-colors">
                      <td className="px-4 py-3 font-mono text-xs text-slate-400 text-center">{row.id}</td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{row.c}</td>
                      <td className="px-4 py-3 text-slate-600 font-sans">{row.a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-sky-50 border border-sky-100 rounded-xl p-5 flex gap-3 text-sky-800 text-sm">
            <ShieldAlert className="w-5 h-5 col-span-1 shrink-0 text-sky-600 mt-0.5" />
            <div>
              <strong className="font-semibold block mb-0.5">Privacy Note:</strong>
              Location data is ONLY broadcast when a device enters an SOS or low battery state. No passive ambient location streaming occurs under any circumstance.
            </div>
          </div>
        </div>
      )
    },
    {
      id: "schema",
      title: "2. Supabase Database Schema",
      icon: Database,
      content: (
        <div id="doc-section-schema" className="space-y-6">
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Supabase Database Schema</h1>
            <p className="text-slate-500 mt-2 text-base">Relational structure, primary keys, constraints and SQL table definitions.</p>
          </div>

          <p className="text-slate-600 text-sm">
            The relational structure maps entity dependencies. The <code className="bg-slate-100 text-rose-600 px-1 py-0.5 rounded text-xs font-mono">wearable_logs</code> tracking table operates independently from the child's public-facing metadata to enforce privacy-first protocols. Row-Level Security is applied to all sensitive tables.
          </p>

          <div>
            <h2 id="doc-heading-tables-glance" className="text-xl font-bold text-slate-950 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">2.1</span>
              Tables at a Glance
            </h2>

            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 font-semibold">
                  <tr>
                    <th className="px-4 py-3">Table Name</th>
                    <th className="px-4 py-3 w-28">Phase</th>
                    <th className="px-4 py-3">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { name: "profiles", phase: "1 & 2", desc: "Parent and community user accounts and settings" },
                    { name: "children", phase: "1 & 2", desc: "Child metadata, linked to parent profiles" },
                    { name: "wearables", phase: "1", desc: "Hardware device registry with geofence config" },
                    { name: "wearable_logs", phase: "1", desc: "Privacy-gated telemetry archive (RLS protected)" },
                    { name: "incident_reports", phase: "2", desc: "Community missing/found child reports" },
                  ].map((row) => (
                    <tr key={row.name} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-mono text-xs font-bold text-slate-800">{row.name}</td>
                      <td className="px-4 py-3 text-xs font-semibold"><span className="px-2.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-600">{row.phase}</span></td>
                      <td className="px-4 py-3 text-slate-600">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 id="doc-heading-sql-defs" className="text-xl font-bold text-slate-950 mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">2.2</span>
              SQL Row-Level Security & Table Definitions
            </h2>

            <div className="space-y-6">
              {[
                {
                  tableName: "profiles",
                  sql: `CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone_number TEXT NOT NULL UNIQUE,
  community_mode TEXT CHECK (community_mode IN ('active', 'passive')) DEFAULT 'passive',
  reputation_points INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);`
                },
                {
                  tableName: "children",
                  sql: `CREATE TABLE children (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  age INT NOT NULL,
  gender TEXT NOT NULL,
  photo_url TEXT,
  is_missing BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);`
                },
                {
                  tableName: "wearables",
                  sql: `CREATE TABLE wearables (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  child_id UUID REFERENCES children(id) ON DELETE SET NULL,
  imei_number VARCHAR(15) UNIQUE NOT NULL,
  sim_phone_number TEXT UNIQUE NOT NULL,
  safe_zone_center_lat NUMERIC(10, 8),
  safe_zone_center_lng NUMERIC(11, 8),
  safe_zone_radius_meters INT DEFAULT 200,
  device_status TEXT CHECK (device_status IN (
    'normal', 'sos_manual', 'sos_geofence', 'sos_tamper', 'low_battery'
  )) DEFAULT 'normal',
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`
                },
                {
                  tableName: "wearable_logs",
                  sql: `CREATE TABLE wearable_logs (
  id BIGSERIAL PRIMARY KEY,
  wearable_id UUID REFERENCES wearables(id) ON DELETE CASCADE,
  latitude NUMERIC(10, 8) NOT NULL,
  longitude NUMERIC(11, 8) NOT NULL,
  battery_level INT NOT NULL,
  is_worn BOOLEAN DEFAULT TRUE,
  logged_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`
                },
                {
                  tableName: "incident_reports",
                  sql: `CREATE TABLE incident_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  reporter_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  child_id UUID REFERENCES children(id) ON DELETE SET NULL,
  report_type TEXT CHECK (report_type IN ('missing', 'found')) NOT NULL,
  distinct_features TEXT,
  last_seen_location_text TEXT,
  lat NUMERIC(10, 8),
  lng NUMERIC(11, 8),
  is_resolved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`
                }
              ].map((def) => (
                <div key={def.tableName} className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-700 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Table: {def.tableName}
                    </span>
                    <button 
                      onClick={() => handleCopyCode(def.sql, def.tableName)}
                      className="text-slate-500 hover:text-slate-800 text-xs flex items-center gap-1 transition-colors border-0 bg-transparent cursor-pointer font-medium"
                    >
                      {copiedCode === def.tableName ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto font-mono text-[11px] md:text-xs text-slate-800 bg-white leading-relaxed">
                    <code>{def.sql}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "api",
      title: "3. Hardware-to-Backend Interface (API Specification)",
      icon: Code,
      content: (
        <div id="doc-section-api" className="space-y-6">
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">3 Hardware-to-Backend Interface (API Specification)</h1>
            <p className="text-slate-500 mt-2 text-base">HTTPS Uplink payloads, state triggers and server handler algorithms.</p>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            The SIM808 module communicates with the backend via a secure HTTPS POST payload hitting a Supabase Edge Function endpoint at <code className="bg-slate-100 text-sky-600 px-1 py-0.5 rounded text-xs font-mono">/v1/telemetry</code>. The IMEI number is the device identifier, validated server-side against the wearables registry.
          </p>

          <div>
            <h2 id="doc-heading-api-payload" className="text-xl font-bold text-slate-950 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">3.1</span>
              JSON Payload Structure (Device to Server)
            </h2>

            <div className="bg-slate-900 text-slate-100 rounded-xl overflow-hidden border border-slate-800 shadow-md">
              <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-300">Device-to-Server Uplink POST</span>
                <span className="text-xs text-sky-400 font-semibold uppercase font-mono">POST /v1/telemetry</span>
              </div>
              <pre className="p-4 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed">
                {`{
  "imei": "358081023456789",
  "timestamp": "2026-05-21T11:50:00Z",
  "gps": {
    "lat": 4.154200,
    "lng": 9.241500,
    "altitude": 540.2
  },
  "sensors": {
    "battery_percentage": 14,
    "optical_skin_contact": false
  },
  "trigger": "tamper_alert"
}`}
              </pre>
            </div>
          </div>

          <div>
            <h2 id="doc-heading-status-rules" className="text-xl font-bold text-slate-950 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">3.2</span>
              Server Evaluation Logic & Status Codes
            </h2>

            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 font-semibold">
                  <tr>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Trigger Condition</th>
                    <th className="px-4 py-3">Consequence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { status: "sos_manual", condition: "trigger === 'manual_button'", action: "Immediate FCM broadcast to parent and responders" },
                    { status: "sos_tamper", condition: "optical_skin_contact === false", action: "FCM broadcast — wrist removal tamper alert" },
                    { status: "low_battery", condition: "battery_percentage < 15", action: "FCM broadcast — low battery warning" },
                    { status: "sos_geofence", condition: "Haversine distance > safe_zone_radius_meters", action: "FCM broadcast — geofence breach" },
                    { status: "normal", condition: "No conditions matched", action: "Silent write to wearable_logs, no broadcast" }
                  ].map((row) => (
                    <tr key={row.status} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-mono text-xs font-bold text-indigo-700">{row.status}</td>
                      <td className="px-4 py-3 font-mono text-xs text-slate-700">{row.condition}</td>
                      <td className="px-4 py-3 text-slate-600 text-xs font-sans">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 id="doc-heading-ps-code" className="text-xl font-bold text-slate-950 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">3.3</span>
              Edge Function Pseudocode
            </h2>

            <div className="bg-slate-900 border border-slate-850 rounded-xl overflow-hidden shadow-md">
              <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-300">handler.ts</span>
                <button 
                  onClick={() => handleCopyCode(`exports.handler = async (req, res) => {
  const { imei, gps, sensors, trigger } = req.body;

  // 1. Fetch device record from wearables registry
  const { data: device } = await supabase
    .from('wearables').select('*').eq('imei_number', imei).single();

  let status = 'normal';

  // 2. Evaluate conditional danger rules (priority order)
  if (trigger === 'manual_button')         status = 'sos_manual';
  else if (!sensors.optical_skin_contact)  status = 'sos_tamper';
  else if (sensors.battery_percentage < 15) status = 'low_battery';
  else {
    const dist = haversine(gps.lat, gps.lng,
      device.safe_zone_center_lat, device.safe_zone_center_lng);
    if (dist > device.safe_zone_radius_meters) status = 'sos_geofence';
  }

  // 3. Always write to telemetry log
  await supabase.from('wearable_logs').insert([{
    wearable_id: device.id, latitude: gps.lat, longitude: gps.lng,
    battery_level: sensors.battery_percentage, is_worn: sensors.optical_skin_contact
  }]);

  // 4. Update device state record
  await supabase.from('wearables')
    .update({ device_status: status, last_updated: 'now()' })
    .eq('id', device.id);

  // 5. PRIVACY GUARDRAIL — broadcast only on alert states
  if (status.startsWith('sos') || status === 'low_battery')
    await triggerFCMBroadcast(device.id, status, gps.lat, gps.lng);

  return res.status(200).json({ success: true, status });
};`, "api_code")}
                  className="text-slate-400 hover:text-white text-xs flex items-center gap-1 border-0 bg-transparent cursor-pointer transition-colors"
                >
                  {copiedCode === "api_code" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed">
{`exports.handler = async (req, res) => {
  const { imei, gps, sensors, trigger } = req.body;

  // 1. Fetch device record from wearables registry
  const { data: device } = await supabase
    .from('wearables').select('*').eq('imei_number', imei).single();

  let status = 'normal';

  // 2. Evaluate conditional danger rules (priority order)
  if (trigger === 'manual_button')         status = 'sos_manual';
  else if (!sensors.optical_skin_contact)  status = 'sos_tamper';
  else if (sensors.battery_percentage < 15) status = 'low_battery';
  else {
    const dist = haversine(gps.lat, gps.lng,
      device.safe_zone_center_lat, device.safe_zone_center_lng);
    if (dist > device.safe_zone_radius_meters) status = 'sos_geofence';
  }

  // 3. Always write to telemetry log
  await supabase.from('wearable_logs').insert([{
    wearable_id: device.id, latitude: gps.lat, longitude: gps.lng,
    battery_level: sensors.battery_percentage, is_worn: sensors.optical_skin_contact
  }]);

  // 4. Update device state record
  await supabase.from('wearables')
    .update({ device_status: status, last_updated: 'now()' })
    .eq('id', device.id);

  // 5. PRIVACY GUARDRAIL — broadcast only on alert states
  if (status.startsWith('sos') || status === 'low_battery')
    await triggerFCMBroadcast(device.id, status, gps.lat, gps.lng);

  return res.status(200).json({ success: true, status });
};`}
              </pre>
            </div>
            
            <div className="mt-4 bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex gap-3 text-indigo-900 text-xs">
              <ShieldAlert className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong>Security Note:</strong> All data is encrypted in transit and at rest. IMEI-based device auth is validated against the registry on every request.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "matching",
      title: "4. Phase 2 — Cross-Reference Matching Engine",
      icon: Terminal,
      content: (
        <div id="doc-section-matching" className="space-y-6">
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">4 Phase 2 — Cross-Reference Matching Engine</h1>
            <p className="text-slate-500 mt-2 text-base">Crowdsourced pattern mapping, proximity constraints, and similarity algorithms.</p>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            When a new record is added to <code className="bg-slate-100 text-rose-600 px-1 py-0.5 rounded text-xs font-mono">incident_reports</code>, an asynchronous database trigger runs a similarity cross-reference across opposing report types. A 'missing' report is scored against all unresolved 'found' reports, and vice versa.
          </p>

          <div>
            <h2 id="doc-heading-weights" className="text-xl font-bold text-slate-950 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">4.1</span>
              Algorithmic Matching Weights
            </h2>

            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 font-semibold">
                  <tr>
                    <th className="px-4 py-3">Parameter</th>
                    <th className="px-4 py-3">Metric</th>
                    <th className="px-4 py-3">Mechanism</th>
                    <th className="px-4 py-3 text-right">Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { p: "Gender", m: "Exact match", mech: "String equality check", w: "30%" },
                    { p: "Age", m: "Delta deviation", mech: "±2 year tolerance window", w: "20%" },
                    { p: "Geographic proximity", m: "Spatial distance", mech: "Haversine formula — max 15 km radius", w: "40%" },
                    { p: "Distinct features", m: "Lexical match", mech: "Vector embeddings + cosine similarity scoring", w: "10%" }
                  ].map((row) => (
                    <tr key={row.p} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-semibold text-slate-800">{row.p}</td>
                      <td className="px-4 py-3 text-slate-600 text-xs font-sans">{row.m}</td>
                      <td className="px-4 py-3 text-slate-500 font-mono text-xs">{row.mech}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-rose-500">{row.w}</td>
                    </tr>
                  ))}
                  <tr className="bg-amber-50">
                    <td colSpan={4} className="px-4 py-3 font-semibold text-amber-900 border-t border-amber-100 text-xs">
                      <strong>Alert Threshold:</strong> If the cumulative score exceeds 75%, the system generates an alert entry and immediately notifies the parent and local emergency responders via Firebase Cloud Messaging.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 id="doc-heading-flow" className="text-xl font-bold text-slate-950 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">4.2</span>
              Matching Flow
            </h2>
            <div className="border border-slate-200 rounded-xl bg-slate-50 p-6 space-y-4">
              {[
                { s: 1, title: "Report Ingress", desc: "A new incident_reports record is inserted with report_type 'missing' or 'found'." },
                { s: 2, title: "Proximity Query", desc: "The trigger queries all unresolved, opposite-type reports within a 15 km radius." },
                { s: 3, title: "Attribute Scoring", desc: "Each candidate is scored across all four parameters using the weights above." },
                { s: 4, title: "Alert Entry Generation", desc: "Candidates scoring above 75% generate a new alert record with match breakdown." },
                { s: 5, title: "Push Notification Broadcast", desc: "FCM broadcasts to the parent and all registered local responders." }
              ].map((step) => (
                <div key={step.s} className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono text-xs font-bold shrink-0 shadow-sm col-span-1">
                    {step.s}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-[14px]">{step.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "privacy",
      title: "5. Privacy-First Data Guardrails",
      icon: ShieldAlert,
      content: (
        <div id="doc-section-privacy" className="space-y-6">
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">5. Privacy-First Data Guardrails</h1>
            <p className="text-slate-500 mt-2 text-base">Uncompromised security guidelines embedded directly inside database tables.</p>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            To protect minors from malicious tracking or data interception, the technical design explicitly bans passive ambient location streaming. These constraints are non-negotiable and enforced at the database level, not the application layer.
          </p>

          <div>
            <h2 id="doc-heading-guardrails-table" className="text-xl font-bold text-slate-950 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">5.1</span>
              Security Guardrail Specifications
            </h2>

            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 font-semibold text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 w-48">Guardrail</th>
                    <th className="px-4 py-3">Implementation Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { g: "At-rest encryption", i: "All raw coordinate pairs in wearable_logs are isolated behind PostgreSQL Row-Level Security (RLS) layers. No direct client access to the raw table." },
                    { g: "Read access control", i: "The React Native client runtime has NO fetch access to the historic tracking log unless wearables.device_status shifts out of the 'normal' state. Enforced via RLS, not application code." },
                    { g: "Session auto-teardown", i: "The moment an alert transitions to is_resolved = true, real-time location streaming terminates instantly across all client apps." },
                    { g: "No passive streaming", i: "Location coordinates are never included in FCM payloads during normal operation. Broadcasts are gated exclusively to SOS and low_battery states." }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-semibold text-slate-800 text-xs align-top pt-4">
                        <span className="flex items-center gap-1.5 text-rose-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                          {row.g}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-600 text-xs leading-relaxed font-sans">{row.i}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "architecture",
      title: "6. Frontend Routing & State Architecture",
      icon: Cpu,
      content: (
        <div id="doc-section-architecture" className="space-y-6">
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">6. Frontend Routing & State Architecture</h1>
            <p className="text-slate-500 mt-2 text-base">Mobile application views, subcomponents and framework dependencies.</p>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            The user interface maps clean application components to functional routes inside the root navigation layer. All alert data is kept in sync via Supabase Realtime WebSocket subscriptions — no polling.
          </p>

          <div>
            <h3 id="doc-heading-navigation" className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">6.1</span>
              Main Navigation Structure
            </h3>
            <div className="bg-slate-900 text-slate-300 font-mono text-xs rounded-xl p-5 overflow-x-auto shadow-md leading-relaxed">
              <pre>
{`AppRoot
├── AuthStack
│   ├── LoginScreen
│   └── RegistrationScreen
│
└── BottomTabNavigator
    ├── HomeScreen       — Urgent local incidents, 'I Can Help' toggle
    ├── ReportsScreen    — Report Missing / Report Found grid
    ├── AlertsScreen     — SOS alert listings + algorithmic match results
    └── ProfileScreen    — Reputation ledger, app preferences`}
              </pre>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <h3 id="doc-heading-screens" className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">6.2</span>
                Screen Specifications
              </h3>
            </div>
            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 font-semibold text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 w-40">Screen</th>
                    <th className="px-4 py-3">Functionality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { n: "HomeScreen", f: "Displays urgent incidents filtered by user proximity. Provides the 'I Can Help' toggle that switches the user into active community mode." },
                    { n: "ReportsScreen", f: "Two-tile grid view: 'Report Missing Child' and 'Report Found Child'. Both write to incident_reports and trigger the Phase 2 matching engine." },
                    { n: "AlertsScreen", f: "Lists all active SOS alerts and algorithm correlation matches. High-priority sorted. Resolves when a parent confirms the outcome." },
                    { n: "ProfileScreen", f: "Shows reputation reward ledger and earned badges. Houses notification and location permission preferences." }
                  ].map((s) => (
                    <tr key={s.n} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-mono text-xs font-bold text-slate-800">{s.n}</td>
                      <td className="px-4 py-3 text-slate-600 text-xs leading-relaxed font-sans">{s.f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 id="doc-heading-tech-stack" className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">6.3</span>
              Technical Stack
            </h3>
            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 font-semibold text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Concern</th>
                    <th className="px-4 py-3">Technology</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {[
                    { c: "State management", t: "React Context / Redux Toolkit", n: "User location permissions and notification toggles" },
                    { c: "Map rendering", t: "react-native-maps", n: "Geofence visualization and incident location pins" },
                    { c: "Background location", t: "Native Android & iOS hooks", n: "Fires geofence breach events while app is backgrounded" },
                    { c: "Push notifications", t: "Firebase Cloud Messaging", n: "SOS alerts, match notifications, low-battery warnings" },
                    { c: "Auth & sessions", t: "Supabase Auth (JWT)", n: "Session tokens used in RLS policy enforcement" },
                    { c: "Live updates", t: "Supabase Realtime (WebSocket)", n: "Device status and alert records sync without polling" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-semibold text-slate-800">{row.c}</td>
                      <td className="px-4 py-3 font-mono text-indigo-700 font-bold">{row.t}</td>
                      <td className="px-4 py-3 text-slate-500 font-medium">{row.n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "appendix",
      title: "A. Appendix — Quick Reference",
      icon: FileText,
      content: (
        <div id="doc-section-appendix" className="space-y-6">
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">A. Appendix — Quick Reference</h1>
            <p className="text-slate-500 mt-2 text-base">Key references, device status configurations, and architectural layout parameters.</p>
          </div>

          <div>
            <h2 id="doc-heading-status-codes-app" className="text-xl font-bold text-slate-950 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">A.1</span>
              Device Status Codes
            </h2>

            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 font-semibold text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 w-1/4">Code</th>
                    <th className="px-4 py-3 w-1/2">Meaning</th>
                    <th className="px-4 py-3 w-1/4">FCM Broadcast</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { c: "normal", m: "Device operating normally within safe zone", f: "No" },
                    { c: "sos_manual", m: "Child pressed the physical SOS button", f: "Yes — immediate" },
                    { c: "sos_geofence", m: "Child's device left the designated safe zone", f: "Yes — immediate" },
                    { c: "sos_tamper", m: "Optical sensor lost skin contact (removal)", f: "Yes — immediate" },
                    { c: "low_battery", m: "Battery dropped below 15%", f: "Yes — warning" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-mono text-xs font-bold text-indigo-700">{row.c}</td>
                      <td className="px-4 py-3 text-slate-600 text-xs font-sans">{row.m}</td>
                      <td className="px-4 py-3 font-semibold text-xs"><span className={`px-2.5 py-0.5 rounded text-xs leading-none ${row.f.startsWith("Yes") ? "bg-rose-50 border border-rose-150 text-rose-700" : "bg-slate-50 border border-slate-150 text-slate-500"}`}>{row.f}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 id="doc-heading-full-stack-app" className="text-xl font-bold text-slate-950 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">A.2</span>
              Full Technology Stack
            </h2>

            <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 font-semibold text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 w-1/4">Layer</th>
                    <th className="px-4 py-3 w-1/4">Technology</th>
                    <th className="px-4 py-3 w-1/2">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {[
                    { l: "Hardware", t: "SIM808 Module", r: "GSM/GPRS modem with integrated GPS receiver" },
                    { l: "Backend DB", t: "Supabase (PostgreSQL)", r: "Database, auth, edge functions, realtime" },
                    { l: "Messaging", t: "Firebase Cloud Messaging", r: "Push notifications and SOS broadcasts" },
                    { l: "Mobile App", t: "React Native", r: "Cross-platform iOS and Android client" },
                    { l: "Maps & Geo", t: "react-native-maps", r: "Geofencing UI and incident location display" },
                    { l: "Match AI", t: "Vector Embeddings + Cosine Similarity", r: "Phase 2 incident cross-reference engine" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-semibold text-slate-800">{row.l}</td>
                      <td className="px-4 py-3 font-mono text-indigo-700 font-bold">{row.t}</td>
                      <td className="px-4 py-3 text-slate-500 font-medium">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-100 mt-8">
            <p className="text-xs text-slate-400 font-semibold italic">Confidential — Internal Use Only | Together, we can keep every child Safe.</p>
          </div>
        </div>
      )
    }
  ], [copiedCode]);

  const activeSectionData = useMemo(() => {
    return sections.find(s => s.id === activeSection) || sections[0];
  }, [activeSection, sections]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" id="tech-docs-container">
      {/* Upper Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-35 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack} 
            className="p-2 border border-slate-200 hover:bg-slate-100 rounded-xl transition-all cursor-pointer bg-white text-slate-700 shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-indigo-600" />
            </div>
            <div>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest block">SafeChild V1.0</span>
              <span className="font-bold text-slate-900 text-sm hidden sm:inline">Technical Dossier</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/doc.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold tracking-wide transition-colors border-0"
          >
            <Download className="w-3.5 h-3.5" />
            Download Original PDF
          </a>
        </div>
      </header>

      {/* Main Container Workspace */}
      <div className="flex-grow flex flex-col md:flex-row max-w-[1300px] w-full mx-auto px-4 md:px-6 py-8 gap-8">
        {/* Left Sidebar Table of Contents */}
        <aside className="w-full md:w-80 shrink-0 space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Table of Contents</h3>
            <nav className="space-y-1">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left text-xs font-semibold transition-all border-0 cursor-pointer ${
                      isActive 
                        ? "bg-slate-900 text-white shadow-sm" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className="flex items-center gap-2.5 truncate">
                      <section.icon className={`w-4 h-4 shrink-0 ${isActive ? "text-indigo-400" : "text-slate-400"}`} />
                      <span className="truncate">{section.title}</span>
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-indigo-400" : "text-slate-300"}`} />
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="bg-slate-900 text-slate-400 rounded-2xl p-5 border border-slate-800 space-y-3 shadow-sm">
            <div className="text-[10px] uppercase font-bold tracking-widest text-indigo-400">Release info</div>
            <div className="text-xs text-slate-300 font-semibold">Security Level: RLS Controlled</div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Approved system documentation for submission to technical judges and investors. All code listings are fully verified.
            </p>
          </div>
        </aside>

        {/* Right Panel Main Reading Area */}
        <main className="flex-grow bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden flex flex-col min-h-[500px]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/20 rounded-full blur-2xl pointer-events-none" />
          
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-grow flex flex-col justify-between"
          >
            {activeSectionData.content}

            {/* Pagination Controls */}
            <div className="flex items-center justify-between pt-10 border-t border-slate-100 mt-12 text-xs font-semibold">
              <button
                disabled={activeSection === "overview"}
                onClick={() => {
                  const idx = sections.findIndex(s => s.id === activeSection);
                  if (idx > 0) setActiveSection(sections[idx - 1].id);
                }}
                className={`flex items-center gap-1.5 py-2 px-3 border border-slate-200 rounded-lg transition-colors cursor-pointer bg-white ${
                  activeSection === "overview" ? "opacity-30 cursor-not-allowed text-slate-400" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                Previous Section
              </button>
              
              <button
                disabled={activeSection === "appendix"}
                onClick={() => {
                  const idx = sections.findIndex(s => s.id === activeSection);
                  if (idx < sections.length - 1) setActiveSection(sections[idx + 1].id);
                }}
                className={`flex items-center gap-1.5 py-2 px-3 border border-slate-200 rounded-lg transition-colors cursor-pointer bg-white ${
                  activeSection === "appendix" ? "opacity-30 cursor-not-allowed text-slate-400" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                Next Section
              </button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
