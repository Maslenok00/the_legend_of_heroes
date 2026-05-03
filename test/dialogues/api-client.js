const API_BASE = process.env.TRAILS_DB_API_BASE ?? "https://trailsinthedatabase.com";

export function getArg(name, fallback) {
  const prefix = `--${name}=`;
  const inline = process.argv.find((arg) => arg.startsWith(prefix));

  if (inline) {
    return inline.slice(prefix.length);
  }

  const index = process.argv.indexOf(`--${name}`);
  if (index !== -1 && process.argv[index + 1]) {
    return process.argv[index + 1];
  }

  return fallback;
}

export function getNumberArg(name, fallback) {
  const value = getArg(name);
  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : fallback;
}

export function getBooleanArg(name, fallback) {
  const value = getArg(name);

  if (value === undefined) {
    return fallback;
  }

  return value === "1" || value.toLowerCase() === "true";
}

export function getArrayArg(name, fallback = []) {
  const values = process.argv
    .filter((arg) => arg.startsWith(`--${name}=`))
    .map((arg) => arg.slice(name.length + 3))
    .flatMap((value) => value.split(","))
    .map((value) => value.trim())
    .filter(Boolean);

  return values.length > 0 ? values : fallback;
}

export async function getJson(path, params = {}) {
  const url = new URL(path, API_BASE);

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === "" || value === null) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => url.searchParams.append(key, String(item)));
      return;
    }

    url.searchParams.set(key, String(value));
  });

  const response = await fetch(url, {
    headers: {
      Accept: "application/json"
    }
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`${response.status} ${response.statusText}\n${body}`);
  }

  return {
    url: url.toString(),
    data: await response.json()
  };
}

export function printResult(title, url, data) {
  console.log(`\n${title}`);
  console.log(url);
  console.log(JSON.stringify(data, null, 2));
}
